const express = require('express');
const router = express.Router();
const db = require('../config.js');

// /contacts/:id route
router.patch('/contacts/:id', function (req, res) {
    const { id } = req.params;
    const { primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body;

    const query = `UPDATE contacts SET primary_contact_name = ?, contact_person_job_title = ?, contact_person_email = ?, alternate_contact_info = ? WHERE contact_id = ? AND Deleted = FALSE`;
    db.query(query, [primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Contact updated successfully.' });
        } else {
            res.status(404).json({ error: 'Contact not found.' });
        }
    });
});

// /company_details/:id route
router.patch('/company_details/:id', function (req, res) {
    const { id } = req.params;
    const { industry_type, headquarters_location, additional_office_location, year_founded, company_website, company_description } = req.body;

    const query = `UPDATE company_details SET industry_type = ?, headquarters_location = ?, additional_office_location = ?, year_founded = ?, company_website = ?, company_description = ? WHERE details_id = ? AND Deleted = FALSE`;
    db.query(query, [industry_type, headquarters_location, additional_office_location, year_founded, company_website, company_description, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company details updated successfully.' });
        } else {
            res.status(404).json({ error: 'Company details not found.' });
        }
    });
});

// /training_programs/:id route
router.patch('/training_programs/:id', function (req, res) {
    const { id } = req.params;
    const { training_name, training_provider, contact_email, contact_number } = req.body;

    const query = `UPDATE training_programs SET training_name = ?, training_provider = ?, contact_email = ?, contact_number = ? WHERE training_id = ? AND Deleted = FALSE`;
    db.query(query, [training_name, training_provider, contact_email, contact_number, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training program updated successfully.' });
        } else {
            res.status(404).json({ error: 'Training program not found.' });
        }
    });
});

// /training_details/:id route
router.patch('/training_details/:id', function (req, res) {
    const { id } = req.params;
    const { training_description, target_audience, training_objectives, training_duration, mode_of_training } = req.body;

    const query = `UPDATE training_details SET training_description = ?, target_audience = ?, training_objectives = ?, training_duration = ?, mode_of_training = ? WHERE details_id = ? AND Deleted = FALSE`;
    db.query(query, [training_description, target_audience, training_objectives, training_duration, mode_of_training, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training details updated successfully.' });
        } else {
            res.status(404).json({ error: 'Training details not found.' });
        }
    });
});

// /training_logistics/:id route
router.patch('/training_logistics/:id', function (req, res) {
    const { id } = req.params;
    const { location, training_schedule, training_fees, prerequisites, registration_deadline, participant_capacity } = req.body;

    const query = `UPDATE training_logistics SET location = ?, training_schedule = ?, training_fees = ?, prerequisites = ?, registration_deadline = ?, participant_capacity = ? WHERE logistics_id = ? AND Deleted = FALSE`;
    db.query(query, [location, training_schedule, training_fees, prerequisites, registration_deadline, participant_capacity, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training logistics updated successfully.' });
        } else {
            res.status(404).json({ error: 'Training logistics not found.' });
        }
    });
});

// /training_participation/:id route
router.patch('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const { training_id, user_id, registration_process, application_process, selection_process, job_market_relevance, career_opportunities, networking_opportunities } = req.body;

    const query = `UPDATE training_participation SET training_id = ?, user_id = ?, registration_process = ?, application_process = ?, selection_process = ?, job_market_relevance = ?, career_opportunities = ?, networking_opportunities = ? WHERE participation_id = ? AND Deleted = FALSE`;
    db.query(query, [training_id, user_id, registration_process, application_process, selection_process, job_market_relevance, career_opportunities, networking_opportunities, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training participation updated successfully.' });
        } else {
            res.status(404).json({ error: 'Training participation not found.' });
        }
    });
});

// /user_contacts/:id route
router.patch('/user_contacts/:id', function (req, res) {
    const { id } = req.params;
    const { phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization } = req.body;

    const query = `UPDATE user_contacts SET phone_number = ?, location = ?, linkedin_profile = ?, portfolio_link = ?, languages_spoken = ?, work_authorization = ? WHERE contact_id = ? AND Deleted = FALSE`;
    db.query(query, [phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User contact updated successfully.' });
        } else {
            res.status(404).json({ error: 'User contact not found.' });
        }
    });
});

// /user_profiles/:id route
router.patch('/user_profiles/:id', function (req, res) {
    const { id } = req.params;
    const { profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability } = req.body;

    const query = `UPDATE user_profiles SET profile_picture = ?, resume_link = ?, experience_level = ?, skills = ?, educational_background = ?, previous_job_titles = ?, certifications = ?, preferred_job_titles = ?, employment_type = ?, desired_salary_range = ?, industry_of_interest = ?, preferred_work_location = ?, availability = ? WHERE user_id = ? AND Deleted = FALSE`;
    db.query(query, [profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User profile updated successfully.' });
        } else {
            res.status(404).json({ error: 'User profile not found.' });
        }
    });
});

// /social_media_links/:id route
router.patch('/social_media_links/:id', function (req, res) {
    const { id } = req.params;
    const { platform_name, profile_url } = req.body;

    const query = `UPDATE social_media_links SET platform_name = ?, profile_url = ? WHERE link_id = ? AND Deleted = FALSE`;
    db.query(query, [platform_name, profile_url, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Social media link updated successfully.' });
        } else {
            res.status(404).json({ error: 'Social media link not found.' });
        }
    });
});

// /promotional_material/:id route
router.patch('/promotional_material/:id', function (req, res) {
    const { id } = req.params;
    const { material_title, material_url } = req.body;

    const query = `UPDATE promotional_material SET material_title = ?, material_url = ? WHERE material_id = ? AND Deleted = FALSE`;
    db.query(query, [material_title, material_url, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Promotional material updated successfully.' });
        } else {
            res.status(404).json({ error: 'Promotional material not found.' });
        }
    });
});

// /faq_and_policies/:id route
router.patch('/faq_and_policies/:id', function (req, res) {
    const { id } = req.params;
    const { question, answer } = req.body;

    const query = `UPDATE faq_and_policies SET question = ?, answer = ? WHERE faq_id = ? AND Deleted = FALSE`;
    db.query(query, [question, answer, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'FAQ or policy updated successfully.' });
        } else {
            res.status(404).json({ error: 'FAQ or policy not found.' });
        }
    });
});

module.exports = router;