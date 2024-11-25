const express = require('express');
const router = express.Router();
const db = require('../config/database');

// DELETE endpoint for 'users' table
router.delete('/users/:id', async (req, res) => {
    try {
        const query = `UPDATE users SET Deleted = TRUE WHERE user_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User soft-deleted successfully.' : 'User not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'user_contacts' table
router.delete('/user_contacts/:id', async (req, res) => {
    try {
        const query = `UPDATE user_contacts SET Deleted = TRUE WHERE contact_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User contact soft-deleted successfully.' : 'Contact not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'user_profiles' table
router.delete('/user_profiles/:id', async (req, res) => {
    try {
        const query = `UPDATE user_profiles SET Deleted = TRUE WHERE profile_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User profile soft-deleted successfully.' : 'Profile not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'companies' table
router.delete('/companies/:id', async (req, res) => {
    try {
        const query = `UPDATE companies SET Deleted = TRUE WHERE company_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Company soft-deleted successfully.' : 'Company not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'company_details' table
router.delete('/company_details/:id', async (req, res) => {
    try {
        const query = `UPDATE company_details SET Deleted = TRUE WHERE details_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Company details soft-deleted successfully.' : 'Details not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'contacts' table
router.delete('/contacts/:id', async (req, res) => {
    try {
        const query = `UPDATE contacts SET Deleted = TRUE WHERE contact_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Contact soft-deleted successfully.' : 'Contact not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'jobs' table
router.delete('/jobs/:id', async (req, res) => {
    try {
        const query = `UPDATE jobs SET Deleted = TRUE WHERE job_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Job soft-deleted successfully.' : 'Job not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'applications' table
router.delete('/applications/:id', async (req, res) => {
    try {
        const query = `UPDATE applications SET Deleted = TRUE WHERE application_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Application soft-deleted successfully.' : 'Application not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'training_programs' table
router.delete('/training_programs/:id', async (req, res) => {
    try {
        const query = `UPDATE training_programs SET Deleted = TRUE WHERE training_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training program soft-deleted successfully.' : 'Training program not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'training_details' table
router.delete('/training_details/:id', async (req, res) => {
    try {
        const query = `UPDATE training_details SET Deleted = TRUE WHERE details_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training details soft-deleted successfully.' : 'Details not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'training_logistics' table
router.delete('/training_logistics/:id', async (req, res) => {
    try {
        const query = `UPDATE training_logistics SET Deleted = TRUE WHERE logistics_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training logistics soft-deleted successfully.' : 'Logistics not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'training_content' table
router.delete('/training_content/:id', async (req, res) => {
    try {
        const query = `UPDATE training_content SET Deleted = TRUE WHERE content_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training content soft-deleted successfully.' : 'Content not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'training_participation' table
router.delete('/training_participation/:id', async (req, res) => {
    try {
        const query = `UPDATE training_participation SET Deleted = TRUE WHERE participation_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training participation soft-deleted successfully.' : 'Participation not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'training_compliance' table
router.delete('/training_compliance/:id', async (req, res) => {
    try {
        const query = `UPDATE training_compliance SET Deleted = TRUE WHERE compliance_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training compliance soft-deleted successfully.' : 'Compliance not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'activity_log' table
router.delete('/activity_log/:id', async (req, res) => {
    try {
        const query = `UPDATE activity_log SET Deleted = TRUE WHERE log_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Activity log soft-deleted successfully.' : 'Log not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'notifications' table
router.delete('/notifications/:id', async (req, res) => {
    try {
        const query = `UPDATE notifications SET Deleted = TRUE WHERE notification_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Notification soft-deleted successfully.' : 'Notification not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'news' table
router.delete('/news/:id', async (req, res) => {
    try {
        const query = `UPDATE news SET Deleted = TRUE WHERE news_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'News soft-deleted successfully.' : 'News not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'user_news_read' table
router.delete('/user_news_read/:id', async (req, res) => {
    try {
        const query = `UPDATE user_news_read SET Deleted = TRUE WHERE user_news_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User news read record soft-deleted successfully.' : 'Record not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'interview_acceptance' table
router.delete('/interview_acceptance/:id', async (req, res) => {
    try {
        const query = `UPDATE interview_acceptance SET Deleted = TRUE WHERE interview_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Interview acceptance soft-deleted successfully.' : 'Acceptance not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE endpoint for 'appointments' table
router.delete('/appointments/:id', async (req, res) => {
    try {
        const query = `UPDATE appointments SET Deleted = TRUE WHERE appointment_id = ?`;
        const [result] = await db.execute(query, [req.params.id]);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Appointment soft-deleted successfully.' : 'Appointment not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;