const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET all records and GET by ID endpoints for each table

// 'users' table
router.get('/users', async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/users/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE user_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'User not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_contacts' table
router.get('/user_contacts', async (req, res) => {
    try {
        const query = `SELECT * FROM user_contacts WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/user_contacts/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM user_contacts WHERE contact_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Contact not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_profiles' table
router.get('/user_profiles', async (req, res) => {
    try {
        const query = `SELECT * FROM user_profiles WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/user_profiles/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM user_profiles WHERE profile_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Profile not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'companies' table
router.get('/companies', async (req, res) => {
    try {
        const query = `SELECT * FROM companies WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/companies/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM companies WHERE company_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Company not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'company_details' table
router.get('/company_details', async (req, res) => {
    try {
        const query = `SELECT * FROM company_details WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/company_details/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM company_details WHERE details_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Details not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'contacts' table
router.get('/contacts', async (req, res) => {
    try {
        const query = `SELECT * FROM contacts WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/contacts/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM contacts WHERE contact_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Contact not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'jobs' table
router.get('/jobs', async (req, res) => {
    try {
        const query = `SELECT * FROM jobs WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/jobs/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM jobs WHERE job_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Job not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'applications' table
router.get('/applications', async (req, res) => {
    try {
        const query = `SELECT * FROM applications WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/applications/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM applications WHERE application_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Application not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_programs' table
router.get('/training_programs', async (req, res) => {
    try {
        const query = `SELECT * FROM training_programs WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/training_programs/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM training_programs WHERE training_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Training program not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_details' table
router.get('/training_details', async (req, res) => {
    try {
        const query = `SELECT * FROM training_details WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/training_details/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM training_details WHERE details_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Training details not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_logistics' table
router.get('/training_logistics', async (req, res) => {
    try {
        const query = `SELECT * FROM training_logistics WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/training_logistics/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM training_logistics WHERE logistics_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Training logistics not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_content' table
router.get('/training_content', async (req, res) => {
    try {
        const query = `SELECT * FROM training_content WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/training_content/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM training_content WHERE content_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Training content not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_participation' table
router.get('/training_participation', async (req, res) => {
    try {
        const query = `SELECT * FROM training_participation WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/training_participation/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM training_participation WHERE participation_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Training participation not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_compliance' table
router.get('/training_compliance', async (req, res) => {
    try {
        const query = `SELECT * FROM training_compliance WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/training_compliance/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM training_compliance WHERE compliance_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Training compliance not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'activity_log' table
router.get('/activity_log', async (req, res) => {
    try {
        const query = `SELECT * FROM activity_log WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/activity_log/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM activity_log WHERE log_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Activity log not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'notifications' table
router.get('/notifications', async (req, res) => {
    try {
        const query = `SELECT * FROM notifications WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/notifications/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM notifications WHERE notification_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Notification not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'news' table
router.get('/news', async (req, res) => {
    try {
        const query = `SELECT * FROM news WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/news/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM news WHERE news_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'News not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_news_read' table
router.get('/user_news_read', async (req, res) => {
    try {
        const query = `SELECT * FROM user_news_read WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/user_news_read/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM user_news_read WHERE user_news_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'User news read not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'interview_acceptance' table
router.get('/interview_acceptance', async (req, res) => {
    try {
        const query = `SELECT * FROM interview_acceptance WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/interview_acceptance/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM interview_acceptance WHERE interview_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Interview acceptance not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'appointments' table
router.get('/appointments', async (req, res) => {
    try {
        const query = `SELECT * FROM appointments WHERE Deleted = FALSE`;
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/appointments/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM appointments WHERE appointment_id = ? AND Deleted = FALSE`;
        const [rows] = await db.execute(query, [req.params.id]);
        res.status(rows.length > 0 ? 200 : 404).json(
            rows.length > 0 ? rows[0] : { message: 'Appointment not found.' }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;
