
const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Replace user details by ID
router.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { full_name, email, password, date_of_birth, nationality } = req.body;
        const query = 'UPDATE users SET full_name = ?, email = ?, password = ?, date_of_birth = ?, nationality = ? WHERE user_id = ? AND Deleted = FALSE';
        const [result] = await db.execute(query, [full_name, email, password, date_of_birth, nationality, userId]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({ 
            message: result.affectedRows > 0 ? 'User updated successfully.' : 'User not found.' 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred.' });
    }
});

module.exports = router;
