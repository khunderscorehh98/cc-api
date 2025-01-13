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
    const companies = req.body; // Expecting an array of company objects

    if (!Array.isArray(companies) || companies.length === 0) {
        return res.status(400).json({ message: 'Invalid input format or empty array.' });
    }

    const query = `INSERT INTO companies (company_name, email, password, contact_number, company_logo, business_registration_number, tax_identification_number, terms_of_service_accepted) VALUES (?,?,?,?,?,?,?,?)`;

    const promises = companies.map(company => {
        const {
            company_name,
            email,
            password,
            contact_number,
            company_logo,
            business_registration_number,
            tax_identification_number,
            terms_of_service_accepted
        } = company;

        const values = [
            company_name,
            email,
            password,
            contact_number,
            company_logo,
            business_registration_number,
            tax_identification_number,
            terms_of_service_accepted
        ];

        return new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) return reject(err);
                resolve(result.insertId);
            });
        });
    });

    Promise.all(promises)
        .then(results => {
            res.status(201).json({
                message: 'Companies created successfully.',
                company_ids: results
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error.' });
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

// /users route
router.post('/users', function (req, res) {
    const { full_name, email, password, date_of_birth, nationality } = req.body;

    const query = `INSERT INTO users (full_name, email, password, date_of_birth, nationality) VALUES (?, ?, ?, ?, ?)`;
    const values = [full_name, email, password, date_of_birth, nationality];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'User created successfully.',
            user_id: result.insertId
        });
    });
});

// /user_profiles route
router.post('/user_profiles', function (req, res) {
    const { user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability } = req.body;

    const query = `INSERT INTO user_profiles (user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'User profile created successfully.',
            profile_id: result.insertId
        });
    });
});

// /activity_log route
router.post('/activity_log', function (req, res) {
    const { user_id, company_id, table_name, record_id, activity_type, details } = req.body;

    const query = `INSERT INTO activity_log (user_id, company_id, table_name, record_id, activity_type, details) 
                    VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [user_id, company_id, table_name, record_id, activity_type, details];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Activity logged successfully.',
            log_id: result.insertId
        });
    });
});

// /user_news_read route
router.post('/user_news_read', function (req, res) {
    const { user_id, news_id, is_read } = req.body;

    const query = `INSERT INTO user_news_read (user_id, news_id, is_read) VALUES (?, ?, ?)`;
    const values = [user_id, news_id, is_read];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'User news read status recorded successfully.',
            user_news_id: result.insertId
        });
    });
});

// /appointments route
router.post('/appointments', function (req, res) {
    const { user_id, appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason } = req.body;

    const query = `INSERT INTO appointments (user_id, appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [user_id, appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Appointment created successfully.',
            appointment_id: result.insertId
        });
    });
});

// /training_schedule route
router.post('/training_schedule', function (req, res) {
    const { training_id, session_date, session_start_time, session_end_time, session_topic } = req.body;

    const query = `INSERT INTO training_schedule (training_id, session_date, session_start_time, session_end_time, session_topic) 
                    VALUES (?, ?, ?, ?, ?)`;
    const values = [training_id, session_date, session_start_time, session_end_time, session_topic];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training schedule created successfully.',
            schedule_id: result.insertId
        });
    });
});

// /training_modules route
router.post('/training_modules', function (req, res) {
    const { training_id, module_title, module_description, resources_link } = req.body;

    const query = `INSERT INTO training_modules (training_id, module_title, module_description, resources_link) 
                    VALUES (?, ?, ?, ?)`;
    const values = [training_id, module_title, module_description, resources_link];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Training module created successfully.',
            module_id: result.insertId
        });
    });
});

// /certifications route
router.post('/certifications', function (req, res) {
    const { user_id, training_id, certification_title, certification_issuer, issue_date, expiration_date } = req.body;

    const query = `INSERT INTO certifications (user_id, training_id, certification_title, certification_issuer, issue_date, expiration_date) 
                    VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [user_id, training_id, certification_title, certification_issuer, issue_date, expiration_date];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Certification recorded successfully.',
            certification_id: result.insertId
        });
    });
});

// /achievements_and_awards route
router.post('/achievements_and_awards', function (req, res) {
    const { user_id, title, description, award_date, issuer } = req.body;

    const query = `INSERT INTO achievements_and_awards (user_id, title, description, award_date, issuer) 
                    VALUES (?, ?, ?, ?, ?)`;
    const values = [user_id, title, description, award_date, issuer];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Achievement or award added successfully.',
            achievement_id: result.insertId
        });
    });
});

// /social_media_links route
router.post('/social_media_links', function (req, res) {
    const { user_id, company_id, platform_name, profile_url } = req.body;

    const query = `INSERT INTO social_media_links (user_id, company_id, platform_name, profile_url) 
                    VALUES (?, ?, ?, ?)`;
    const values = [user_id, company_id, platform_name, profile_url];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Social media link added successfully.',
            link_id: result.insertId
        });
    });
});

// /promotional_material route
router.post('/promotional_material', function (req, res) {
    const { training_id, material_title, material_url } = req.body;

    const query = `INSERT INTO promotional_material (training_id, material_title, material_url) 
                    VALUES (?, ?, ?)`;
    const values = [training_id, material_title, material_url];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'Promotional material added successfully.',
            material_id: result.insertId
        });
    });
});

// /faq_and_policies route
router.post('/faq_and_policies', function (req, res) {
    const { training_id, question, answer } = req.body;

    const query = `INSERT INTO faq_and_policies (training_id, question, answer) VALUES (?, ?, ?)`;
    const values = [training_id, question, answer];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({
            message: 'FAQ or policy added successfully.',
            faq_id: result.insertId
        });
    });
});

module.exports = router;
