const express = require('express');
const router = express.Router();
const db = require('../config/database');

// PATCH endpoint for dynamically updating fields in a table

// 'users' table
router.patch('/users/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE users SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE user_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User updated successfully.' : 'User not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_contacts' table
router.patch('/user_contacts/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE user_contacts SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE contact_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User contact updated successfully.' : 'Contact not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_profiles' table
router.patch('/user_profiles/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE user_profiles SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE profile_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User profile updated successfully.' : 'Profile not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'companies' table
router.patch('/companies/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE companies SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE company_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Company updated successfully.' : 'Company not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'company_details' table
router.patch('/company_details/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE company_details SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE details_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Company details updated successfully.' : 'Details not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'contacts' table
router.patch('/contacts/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE contacts SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE contact_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Contact updated successfully.' : 'Contact not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'jobs' table
router.patch('/jobs/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE jobs SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE job_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Job updated successfully.' : 'Job not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'applications' table
router.patch('/applications/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE applications SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE application_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Application updated successfully.' : 'Application not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_programs' table
router.patch('/training_programs/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE training_programs SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE training_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training program updated successfully.' : 'Training program not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_details' table
router.patch('/training_details/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE training_details SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE details_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training details updated successfully.' : 'Training details not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_logistics' table
router.patch('/training_logistics/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE training_logistics SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE logistics_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training logistics updated successfully.' : 'Training logistics not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_content' table
router.patch('/training_content/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE training_content SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE content_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training content updated successfully.' : 'Training content not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_participation' table
router.patch('/training_participation/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE training_participation SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE participation_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training participation updated successfully.' : 'Training participation not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'training_compliance' table
router.patch('/training_compliance/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE training_compliance SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE compliance_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Training compliance updated successfully.' : 'Training compliance not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'activity_log' table
router.patch('/activity_log/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE activity_log SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE log_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Activity log updated successfully.' : 'Activity log not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'notifications' table
router.patch('/notifications/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE notifications SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE notification_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Notification updated successfully.' : 'Notification not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'news' table
router.patch('/news/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE news SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE news_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'News updated successfully.' : 'News not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_news_read' table
router.patch('/user_news_read/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE user_news_read SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE user_news_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'User news read record updated successfully.' : 'Record not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'interview_acceptance' table
router.patch('/interview_acceptance/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE interview_acceptance SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE interview_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Interview acceptance updated successfully.' : 'Interview acceptance not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'appointments' table
router.patch('/appointments/:id', async (req, res) => {
    try {
        const updates = req.body;
        const query = `UPDATE appointments SET ${Object.keys(updates).map(
            (key) => `${key} = ?`
        ).join(', ')} WHERE appointment_id = ? AND Deleted = FALSE`;
        const values = [...Object.values(updates), req.params.id];

        const [result] = await db.execute(query, values);
        res.status(result.affectedRows > 0 ? 200 : 404).json({
            message: result.affectedRows > 0 ? 'Appointment updated successfully.' : 'Appointment not found.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;