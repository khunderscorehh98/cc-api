// Import necessary libraries
const express = require('express');
const bcrypt = require('bcrypt');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const db = require('../config.js'); // Database connection
const jwt = require('jsonwebtoken');

// Secret key for signing JWT tokens
// Replace with an environment variable in production
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

// Hashing salt rounds
const SALT_ROUNDS = 10;

// Moderator Registration Route
router.post('/register', async (req, res) => {
    const { full_name, email, password, role_id } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Save moderator to the database
        const query = `INSERT INTO mods (full_name, email, password, role_id) VALUES (?, ?, ?, ?)`;
        db.query(query, [full_name, email, hashedPassword, role_id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error registering moderator' });
            }
            res.status(201).json({ message: 'Moderator registered successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch the moderator from the database
        const query = `SELECT * FROM mods WHERE email = ? AND Deleted = 0 AND Archive = 0`;
        db.query(query, [email], async (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            if (results.length === 0) return res.status(401).json({ message: 'Invalid email or password' });

            const mod = results[0];

            // Compare hashed password
            const isMatch = await bcrypt.compare(password, mod.password);
            if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

            // Generate JWT token
            const token = jwt.sign({ id: mod.mod_id, email: mod.email, role: mod.role_id }, JWT_SECRET, {
                expiresIn: '1h', // Token expires in 1 hour
            });

            res.status(200).json({ message: 'Login successful', token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Enable 2FA for Moderator
router.post('/enable-2fa', (req, res) => {
    const { email } = req.body;

    // Generate a TOTP secret
    const secret = speakeasy.generateSecret();

    // Save the secret in the database
    const query = `UPDATE mods SET two_fa_secret = ?, two_fa_enabled = 1 WHERE email = ? AND Deleted = 0 AND Archive = 0`;
    db.query(query, [secret.base32, email], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error enabling 2FA' });
        }

        // Generate a QR code
        QRCode.toDataURL(secret.otpauth_url, (err, dataUrl) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error generating QR code' });
            }

            res.status(200).json({ message: '2FA enabled', qrCode: dataUrl });
        });
    });
});

// Verify 2FA Token for Moderator
router.post('/verify-2fa', (req, res) => {
    const { email, token } = req.body;

    // Fetch the moderator's 2FA secret from the database
    const query = `SELECT two_fa_secret FROM mods WHERE email = ? AND Deleted = 0 AND Archive = 0`;
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error fetching 2FA secret' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Moderator not found' });
        }

        const { two_fa_secret } = results[0];

        // Verify the token
        const verified = speakeasy.totp.verify({
            secret: two_fa_secret,
            encoding: 'base32',
            token
        });

        if (!verified) {
            return res.status(401).json({ message: 'Invalid 2FA token' });
        }

        res.status(200).json({ message: '2FA verification successful' });
    });
});

router.get('/validate', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });
        res.status(200).json({ message: 'Token is valid', user });
    });
});


module.exports = router;
