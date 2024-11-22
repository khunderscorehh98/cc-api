// deleteRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config');

// Soft delete contact
router.delete('/contacts/:contact_id', async (req, res) => {
    const { contact_id } = req.params;
    try {
        const [result] = await db.execute('UPDATE contacts SET Deleted = TRUE WHERE contact_id = ?', [contact_id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error: error.message });
    }
});

// Soft delete job
router.delete('/jobs/:job_id', async (req, res) => {
    const { job_id } = req.params;
    try {
        const [result] = await db.execute('UPDATE jobs SET Deleted = TRUE WHERE job_id = ?', [job_id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error: error.message });
    }
});

// Soft delete application
router.delete('/applications/:application_id', async (req, res) => {
    const { application_id } = req.params;
    try {
        const [result] = await db.execute('UPDATE applications SET Deleted = TRUE WHERE application_id = ?', [application_id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error: error.message });
    }
});

module.exports = router;
