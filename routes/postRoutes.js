const express = require('express');
const router = express.Router();
const { insertData } = require('../helpers');  // Import the insertData helper function

// Create a new contact
router.post('/contacts', async (req, res) => {
    const { company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body;

    // Input validation
    if (!company_id || !primary_contact_name || !contact_person_job_title || !contact_person_email) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const query = 'INSERT INTO contacts (company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info) VALUES (?, ?, ?, ?, ?)';
        const params = [company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info];
        const result = await insertData(query, params);  // Use insertData helper function
        res.status(201).json({ message: 'Contact created successfully', contactId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating contact', error: error.message });
    }
});

// Apply for a job
router.post('/applications', async (req, res) => {
    const { job_id, user_id, interview_date, status } = req.body;

    // Input validation
    if (!job_id || !user_id || !status) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const query = 'INSERT INTO applications (job_id, user_id, interview_date, status) VALUES (?, ?, ?, ?)';
        const params = [job_id, user_id, interview_date, status];
        const result = await insertData(query, params);  // Use insertData helper function
        res.status(201).json({ message: 'Application submitted successfully', applicationId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting application', error: error.message });
    }
});

// Create a new training program
router.post('/training_programs', async (req, res) => {
    const { company_id, training_name, training_provider, contact_email } = req.body;

    // Input validation
    if (!company_id || !training_name || !training_provider || !contact_email) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const query = 'INSERT INTO training_programs (company_id, training_name, training_provider, contact_email) VALUES (?, ?, ?, ?)';
        const params = [company_id, training_name, training_provider, contact_email];
        const result = await insertData(query, params);  // Use insertData helper function
        res.status(201).json({ message: 'Training program created successfully', trainingId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating training program', error: error.message });
    }
});

// Log an activity
router.post('/activity_log', async (req, res) => {
    const { user_id, company_id, table_name, record_id, activity_type, details } = req.body;

    // Input validation
    if (!user_id || !company_id || !table_name || !record_id || !activity_type) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const query = 'INSERT INTO activity_log (user_id, company_id, table_name, record_id, activity_type, details) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [user_id, company_id, table_name, record_id, activity_type, details];
        const result = await insertData(query, params);  // Use insertData helper function
        res.status(201).json({ message: 'Activity log created successfully', logId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating activity log', error: error.message });
    }
});

module.exports = router;
