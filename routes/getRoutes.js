const express = require('express');
const router = express.Router();
const { executeQuery } = require('../helpers');  // Import the helper function

// Users
router.get('/users', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM users WHERE Deleted = FALSE');
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

router.get('/users/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM users WHERE user_id = ? AND Deleted = FALSE', [user_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
});

// User Contacts
router.get('/user_contacts', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM user_contacts WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user contacts', error: error.message });
    }
});

router.get('/user_contacts/:contact_id', async (req, res) => {
    const { contact_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM user_contacts WHERE contact_id = ? AND Deleted = FALSE', [contact_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact', error: error.message });
    }
});

// User Profiles
router.get('/user_profiles', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM user_profiles WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profiles', error: error.message });
    }
});

router.get('/user_profiles/:profile_id', async (req, res) => {
    const { profile_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM user_profiles WHERE profile_id = ? AND Deleted = FALSE', [profile_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
});

// Companies
router.get('/companies', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM companies WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching companies', error: error.message });
    }
});

router.get('/companies/:company_id', async (req, res) => {
    const { company_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM companies WHERE company_id = ? AND Deleted = FALSE', [company_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company', error: error.message });
    }
});

// Company Details
router.get('/company_details', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM company_details WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company details', error: error.message });
    }
});

router.get('/company_details/:details_id', async (req, res) => {
    const { details_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM company_details WHERE details_id = ? AND Deleted = FALSE', [details_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Company details not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company details', error: error.message });
    }
});

// Jobs
router.get('/jobs', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM jobs WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
});

router.get('/jobs/:job_id', async (req, res) => {
    const { job_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM jobs WHERE job_id = ? AND Deleted = FALSE', [job_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job', error: error.message });
    }
});

// Applications
router.get('/applications', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM applications WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications', error: error.message });
    }
});

router.get('/applications/:application_id', async (req, res) => {
    const { application_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM applications WHERE application_id = ? AND Deleted = FALSE', [application_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching application', error: error.message });
    }
});

// Training Programs
router.get('/training_programs', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM training_programs WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching training programs', error: error.message });
    }
});

router.get('/training_programs/:training_id', async (req, res) => {
    const { training_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM training_programs WHERE training_id = ? AND Deleted = FALSE', [training_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Training program not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching training program', error: error.message });
    }
});

// Activity Log
router.get('/activity_log', async (req, res) => {
    try {
        const rows = await executeQuery('SELECT * FROM activity_log WHERE Deleted = FALSE');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
});

router.get('/activity_log/:log_id', async (req, res) => {
    const { log_id } = req.params;
    try {
        const rows = await executeQuery('SELECT * FROM activity_log WHERE log_id = ? AND Deleted = FALSE', [log_id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Activity log not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity log', error: error.message });
    }
});

module.exports = router;
