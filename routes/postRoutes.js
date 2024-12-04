const express = require('express');
const router = express.Router();
const db = require('../config.js');

// /applications route
router.post('/applications', function (req, res) {
    const { job_id, user_id, interview_date, status } = req.body; // Changed from req.params to req.body

    const validStatuses = ['Pending', 'Accepted', 'Rejected']; // Valid ENUM values
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({
            message: `Invalid status value. Must be one of: ${validStatuses.join(', ')}`
        });
    }

    const query = `INSERT INTO applications (job_id, user_id, interview_date, status) 
                    VALUES (?,?,?,?)`;

    const values = [job_id, user_id, interview_date, status];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Application created successfully.',
            application_id: result.insertId
        });
    });
});

// /jobs route
router.post('/jobs', function (req, res) {
    const { title, description, requirement, location, salary_range, employment_type, employer_id } = req.body; // Changed from req.params to req.body
    const validEmploymentTypes = ['Full-time', 'Part-time', 'Contract'];
    const validSalaryRanges = ['10000-15000', '15001-20000', '20001-25000', '25001-30000'];

    // Check if employment_type and salary_range are provided and if they're valid
    if (!validEmploymentTypes.includes(employment_type)) {
        return res.status(400).json({
            message: `Invalid employment type value. Must be one of: ${validEmploymentTypes.join(', ')}`
        });
    }
    if (!validSalaryRanges.includes(salary_range)) {
        return res.status(400).json({
            message: `Invalid salary range value. Must be one of: ${validSalaryRanges.join(', ')}`
        });
    }

    const query = `INSERT INTO jobs (title, description, requirement, location, salary_range, employment_type, employer_id) 
                    VALUES (?,?,?,?,?,?,?)`;
    const values = [title, description, requirement, location, salary_range, employment_type, employer_id];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Job created successfully.',
            job_id: result.insertId
        });
    });
});

// /companies route
router.post('/companies', function (req, res) {
    const { company_name, email, password, contact_number, company_logo, tax_registration_number, tax_identification_number, terms_of_service_accepted } = req.body; // Changed from req.params to req.body

    const query = `INSERT INTO companies (company_name, email, password, contact_number, company_logo, tax_registration_number, tax_identification_number, terms_of_service_accepted) 
                    VALUES (?,?,?,?,?,?,?,?)`;

    const values = [company_name, email, password, contact_number, company_logo, tax_registration_number, tax_identification_number, terms_of_service_accepted];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Company created successfully.',
            company_id: result.insertId
        });
    });
});

// /company_details route (Fixed missing closing brace)
router.post('/company_details', function (req, res) {
    const { company_id, industry_type, headquarters_location, additional_office_location, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards } = req.body; // Changed from req.params to req.body

    const query = `INSERT INTO company_details (company_id, industry_type, headquarters_location, additional_office_location, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards) 
                    VALUES (?,?,?,?,?,?,?,?,?,?)`;

    const values = [company_id, industry_type, headquarters_location, additional_office_location, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Company details created successfully.',
            details_id: result.insertId
        });
    });
});

// /contacts route
router.post('/contacts', function (req, res) {
    const { company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body; // Changed from req.params to req.body

    const query = `INSERT INTO contacts (company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info) 
                    VALUES (?,?,?,?,?)`;

    const values = [company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Contact created successfully.',
            contact_id: result.insertId
        });
    });
});

// /interview_acceptance route
router.post('/interview_acceptance', function (req, res) {
    const { user_id, job_id, interview_date, interview_location, interview_time, interview_status } = req.body; // Corrected to req.body
    const validStatuses = ['Pending', 'Accepted', 'Rejected']; // Valid ENUM values

    // Check if interview_status is provided and if it's valid
    if (interview_status && !validStatuses.includes(interview_status)) {
        return res.status(400).json({
            message: `Invalid interview status value. Must be one of: ${validStatuses.join(', ')}`
        });
    }

    // Prepare the query
    const query = `INSERT INTO interview_acceptance (user_id, job_id, interview_date, interview_location, interview_time, interview_status) 
                    VALUES (?,?,?,?,?,?)`;
    const values = [user_id, job_id, interview_date, interview_location, interview_time, interview_status];

    // Execute the query
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        // Send success response with the inserted interview ID
        res.status(201).json({
            message: 'Interview acceptance created successfully.',
            interview_id: result.insertId
        });
    });
});

router.post('/news', function(req, res) {
    const {headline, body, link} = req.body;
    const query = `INSERT INTO news (headline, body, link) VALUES (?,?,?)`;
    const values = [headline, body, link];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'News article created successfully.',
            news_id: result.insertId
        });
    });
    res.send('News article created successfully');
})

router.post('/notifications', function(req, res) {
    const {user_id, notification_type, message, is_read } = req.body;
    const query = `INSERT INTO notifications (user_id, notification_type, message, is_read) VALUES (?,?,?,?)`;
    const values = [user_id, notification_type, message, is_read];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Notification created successfully.',
            notification_id: result.insertId
        });
    });
})

router.post('/training_compliance', function(req, res) {
    const { training_id, consent_and_privacy_policy, terms_and_conditions, promotional_material, sponsorship_details, faq_and_policies } = req.body;
    const query = `INSERT INTO training_compliance (training_id, consent_and_privacy_policy, terms_and_conditions, promotional_material, sponsorship_details, faq_and_policies) VALUES (?,?,?,?,?,?)`;
    const values = [training_id, consent_and_privacy_policy, terms_and_conditions, promotional_material, sponsorship_details, faq_and_policies];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training compliance details created successfully.',
            compliance_id: result.insertId
        });
    });
    res.send('Training compliance details created successfully');
})

router.post('/training_content', function(req, res) {
    const { training_id, training_modules, resources_provided, certification_offered } = req.body;
    const query = `INSERT INTO training_content (training_id, training_modules, resources_provided, certification_offered) VALUES (?,?,?,?)`;
    const values = [training_id, training_modules, resources_provided, certification_offered];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training content created successfully.',
            content_id: result.insertId
        });
    });
    res.send('Training content created successfully');
})

router.post('/trainig_details', function(req, res) {
    const {training_id, training_description, target_audience, training_objectives, training_duration, mode_of_training, start_date, end_date} = req.body;
    const query = `INSERT INTO training_details (training_id, training_description, target_audience, training_objectives, training_duration, mode_of_training, start_date, end_date) VALUES (?,?,?,?,?,?,?,?)`;
    const values = [training_id, training_description, target_audience, training_objectives, training_duration, mode_of_training, start_date, end_date];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training details created successfully.',
            details_id: result.insertId
        });
    });
    res.send('Training details created successfully');
})

router.post('/trainig_logistics', function(req, res) {
    const { training_id, location, training_schedule, training_fee, prerequisites, resitration_deadline, participation_capacity } = req.body;
    const query = `INSERT INTO training_logistics (training_id, location, training_schedule, training_fee, prerequisites, resitration_deadline, participation_capacity) VALUES (?,?,?,?,?,?,?)`;
    const values = [training_id, location, training_schedule, training_fee, prerequisites, resitration_deadline, participation_capacity];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training logistics created successfully.',
            logistics_id: result.insertId
        });
    });
    res.send('Training logistics created successfully');
})

router.post('/training_partipation', function(req, res) {
    const { training_id, user_id, registration_process, application_process, selection_process, job_market_relevance, career_opportunities, networking_opportunities } = req.body;
    const query = `INSERT INTO training_participation (training_id, user_id, registration_process, application_process, selection_process, job_market_relevance, career_opportunities, networking_opportunities) VALUES (?,?,?,?,?,?,?,?)`;
    const values = [training_id, user_id, registration_process, application_process, selection_process, job_market_relevance, career_opportunities, networking_opportunities];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training participation created successfully.',
            participation_id: result.insertId
        });
    });
    res.send('Training participation created successfully');
})

router.post('/training_programs', function(req, res) {
    const {company_id, training_name, training_provider, contact_email, contact_number } = req.body;
    const query = `INSERT INTO taining_programs (company_id, training_name, training_provider, contact_email, contact_number) VALUES (?,?,?,?,?)`;
    const values = [company_id, training_name, training_provider, contact_email, contact_number];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training program created successfully.',
            program_id: result.insertId
        });
    });
    res.send('Training program created successfully');
})

router.post('/user_contacts', function(req, res) {
    const {user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization} = req.body;
    const query = `INSERT INTO user_contacts (user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization) VALUES (?,?,?,?,?,?,?)`;
    const values = [user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'User contact created successfully.',
            contact_id: result.insertId
        });
    });
    res.send('User contact created successfully');
})
module.exports = router;
