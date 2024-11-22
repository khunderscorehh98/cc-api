// putRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config');

// Update a contact by ID
router.put('/contacts/:contact_id', async (req, res) => {
    const { contact_id } = req.params;
    const { primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body;
    try {
        const [result] = await db.execute(
            'UPDATE contacts SET primary_contact_name = ?, contact_person_job_title = ?, contact_person_email = ?, alternate_contact_info = ? WHERE contact_id = ?',
            [primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info, contact_id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact', error: error.message });
    }
});

// Update job details by ID
router.put('/jobs/:job_id', async (req, res) => {
    const { job_id } = req.params;
    const { title, description, requirements, location, salary_range, employment_type, closing_date } = req.body;
    try {
        const [result] = await db.execute(
            'UPDATE jobs SET title = ?, description = ?, requirements = ?, location = ?, salary_range = ?, employment_type = ?, closing_date = ? WHERE job_id = ?',
            [title, description, requirements, location, salary_range, employment_type, closing_date, job_id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating job', error: error.message });
    }
});

module.exports = router;
