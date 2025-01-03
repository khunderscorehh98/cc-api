const express = require('express');
const router = express.Router();
const db = require('../config.js');

// /activity_log/:id route (PUT)
router.put('/activity_log/:id', function (req, res) {
    const { id } = req.params;
    const { details } = req.body;

    if (!details) {
        return res.status(400).json({ error: 'Details parameter is required.' });
    }

    const query = `UPDATE activity_log SET details = ? WHERE log_id = ? AND Deleted = FALSE`;
    db.query(query, [details, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Activity log updated successfully.' });
        } else {
            res.status(404).json({ error: 'Activity log not found.' });
        }
    });
});

// /achievements_and_awards/:id route (PUT)
router.put('/achievements_and_awards/:id', function (req, res) {
    const { id } = req.params;
    const { title, description, issuer } = req.body;

    if (!title || !description || !issuer) {
        return res.status(400).json({ error: 'Title, description, and issuer parameters are required.' });
    }

    const query = `UPDATE achievements_and_awards SET title = ?, description = ?, issuer = ? WHERE achievement_id = ? AND Deleted = FALSE`;
    db.query(query, [title, description, issuer, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Achievement and award updated successfully.' });
        } else {
            res.status(404).json({ error: 'Achievement and award not found.' });
        }
    });
});

// /applications/:id route (PUT)
router.put('/applications/:id', function (req, res) {
    const { id } = req.params;
    const { job_id, user_id, application_date, interview_date, status } = req.body;

    if (!job_id || !user_id || !application_date || !interview_date || !status) {
        return res.status(400).json({ error: 'All parameters are required.' });
    }

    const validStatuses = ['Pending', 'Accepted', 'Rejected'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: `Invalid status value. Must be one of: ${validStatuses.join(', ')}` });
    }

    const query = `UPDATE applications SET job_id = ?, user_id = ?, application_date = ?, interview_date = ?, status = ? WHERE application_id = ? AND Deleted = FALSE`;
    db.query(query, [job_id, user_id, application_date, interview_date, status, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Application updated successfully.' });
        } else {
            res.status(404).json({ error: 'Application not found.' });
        }
    });
});

// /appointments/:id route (PUT)
router.put('/appointments/:id', function (req, res) {
    const { id } = req.params;
    const { appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason } = req.body;

    const validStatuses = ['Pending', 'Accepted', 'Rejected'];
    if (!appointment_type || !appointment_header || !appointment_description || !appointment_date || !appointment_time || !appointment_location || !appointment_status || !reason) {
        return res.status(400).json({ error: 'All parameters are required.' });
    }

    if (!validStatuses.includes(appointment_status)) {
        return res.status(400).json({ error: `Invalid status value. Must be one of: ${validStatuses.join(', ')}` });
    }

    const query = `UPDATE appointments SET appointment_type = ?, appointment_header = ?, appointment_description = ?, appointment_date = ?, appointment_time = ?, appointment_location = ?, appointment_status = ?, reason = ? WHERE appointment_id = ? AND Deleted = FALSE`;
    db.query(query, [appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Appointment updated successfully.' });
        } else {
            res.status(404).json({ error: 'Appointment not found.' });
        }
    });
});

// /certifications/:id route (PUT)
router.put('/certifications/:id', function (req, res) {
    const { id } = req.params;
    const { certification_title, certification_issuer, issue_date, expiration_date } = req.body;

    if (!certification_title || !certification_issuer || !issue_date || !expiration_date) {
        return res.status(400).json({ error: 'All parameters are required.' });
    }

    const query = `UPDATE certifications SET certification_title = ?, certification_issuer = ?, issue_date = ?, expiration_date = ? WHERE certification_id = ? AND Deleted = FALSE`;
    db.query(query, [certification_title, certification_issuer, issue_date, expiration_date, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Certification updated successfully.' });
        } else {
            res.status(404).json({ error: 'Certification not found.' });
        }
    });
});

// /company_details/:id route (PUT)
router.put('/company_details/:id', function (req, res) {
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

// /user_contacts/:id route (PUT)
router.put('/user_contacts/:id', function (req, res) {
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

// /user_profiles/:id route (PUT)
router.put('/user_profiles/:id', function (req, res) {
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

// /social_media_links/:id route (PUT)
router.put('/social_media_links/:id', function (req, res) {
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
// /contacts/:id route (PUT)
router.put('/contacts/:id', function (req, res) {
    const { id } = req.params;
    const { company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body;

    const query = `UPDATE contacts SET company_id = ?, primary_contact_name = ?, contact_person_job_title = ?, contact_person_email = ?, alternate_contact_info = ? WHERE contact_id = ? AND Deleted = FALSE`;
    db.query(query, [company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info, id], function (err, result) {
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

// /training_logistics/:id route (PUT)
router.put('/training_logistics/:id', function (req, res) {
    const { id } = req.params;
    const { training_id, location, training_schedule, training_fees, prerequisites, registration_deadline, participant_capacity } = req.body;

    const query = `UPDATE training_logistics SET training_id = ?, location = ?, training_schedule = ?, training_fees = ?, prerequisites = ?, registration_deadline = ?, participant_capacity = ? WHERE logistics_id = ? AND Deleted = FALSE`;
    db.query(query, [training_id, location, training_schedule, training_fees, prerequisites, registration_deadline, participant_capacity, id], function (err, result) {
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

// /training_participation/:id route (PUT)
router.put('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const { training_id, user_id, registration_process, application_requirements, selection_process, job_market_relevance, career_opportunities, networking_opportunities } = req.body;

    const query = `UPDATE training_participation SET training_id = ?, user_id = ?, registration_process = ?, application_requirements = ?, selection_process = ?, job_market_relevance = ?, career_opportunities = ?, networking_opportunities = ? WHERE participation_id = ? AND Deleted = FALSE`;
    db.query(query, [training_id, user_id, registration_process, application_requirements, selection_process, job_market_relevance, career_opportunities, networking_opportunities, id], function (err, result) {
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

// /user_news_read/:id route (PUT)
router.put('/user_news_read/:id', function (req, res) {
    const { id } = req.params;
    const { user_id, news_id, is_read, read_date } = req.body;

    const query = `UPDATE user_news_read SET user_id = ?, news_id = ?, is_read = ?, read_date = ? WHERE user_news_id = ? AND Deleted = FALSE`;
    db.query(query, [user_id, news_id, is_read, read_date, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User news read record updated successfully.' });
        } else {
            res.status(404).json({ error: 'User news read record not found.' });
        }
    });
});

// /notifications/:id route (PUT)
router.put('/notifications/:id', function (req, res) {
    const { id } = req.params;
    const { user_id, notification_type, message, is_read } = req.body;

    const query = `UPDATE notifications SET user_id = ?, notification_type = ?, message = ?, is_read = ? WHERE notification_id = ? AND Deleted = FALSE`;
    db.query(query, [user_id, notification_type, message, is_read, id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Notification updated successfully.' });
        } else {
            res.status(404).json({ error: 'Notification not found.' });
        }
    });
});

// Export the router
module.exports = router;

// Export the router
module.exports = router;
