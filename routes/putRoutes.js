const express = require('express');
const router = express.Router();
const db = require('../config/database');

// PUT endpoint for fully updating records in each table

// 'users' table
router.put('/users/:id', async (req, res) => {
    try {
        const { full_name, email, password, date_of_birth, nationality } = req.body;
        const query = `UPDATE users SET full_name = ?, email = ?, password = ?, date_of_birth = ?, nationality = ? WHERE user_id = ? AND Deleted = FALSE`;
        const values = [full_name, email, password, date_of_birth, nationality, req.params.id];

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
router.put('/user_contacts/:id', async (req, res) => {
    try {
        const { user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization } = req.body;
        const query = `UPDATE user_contacts SET user_id = ?, phone_number = ?, location = ?, linkedin_profile = ?, portfolio_link = ?, languages_spoken = ?, work_authorization = ? WHERE contact_id = ? AND Deleted = FALSE`;
        const values = [user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization, req.params.id];

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
router.put('/user_profiles/:id', async (req, res) => {
    try {
        const { user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability } = req.body;
        const query = `UPDATE user_profiles SET user_id = ?, profile_picture = ?, resume_link = ?, experience_level = ?, skills = ?, educational_background = ?, previous_job_titles = ?, certifications = ?, preferred_job_titles = ?, employment_type = ?, desired_salary_range = ?, industry_of_interest = ?, preferred_work_location = ?, availability = ? WHERE profile_id = ? AND Deleted = FALSE`;
        const values = [user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability, req.params.id];

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
router.put('/companies/:id', async (req, res) => {
    try {
        const { company_name, email, password, contact_number, company_logo, business_registration_number, tax_identification_number, terms_of_service_accepted } = req.body;
        const query = `UPDATE companies SET company_name = ?, email = ?, password = ?, contact_number = ?, company_logo = ?, business_registration_number = ?, tax_identification_number = ?, terms_of_service_accepted = ? WHERE company_id = ? AND Deleted = FALSE`;
        const values = [company_name, email, password, contact_number, company_logo, business_registration_number, tax_identification_number, terms_of_service_accepted, req.params.id];

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
router.put('/company_details/:id', async (req, res) => {
    try {
        const { company_id, industry_type, company_size, headquarters_location, additional_office_locations, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards } = req.body;
        const query = `UPDATE company_details SET company_id = ?, industry_type = ?, company_size = ?, headquarters_location = ?, additional_office_locations = ?, year_founded = ?, company_website = ?, company_description = ?, social_media_links = ?, company_culture_info = ?, achievements_and_awards = ? WHERE details_id = ? AND Deleted = FALSE`;
        const values = [company_id, industry_type, company_size, headquarters_location, additional_office_locations, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards, req.params.id];

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
router.put('/contacts/:id', async (req, res) => {
    try {
        const { company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body;
        const query = `UPDATE contacts SET company_id = ?, primary_contact_name = ?, contact_person_job_title = ?, contact_person_email = ?, alternate_contact_info = ? WHERE contact_id = ? AND Deleted = FALSE`;
        const values = [company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info, req.params.id];

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
router.put('/jobs/:id', async (req, res) => {
    try {
        const { title, description, requirements, location, salary_range, employment_type, closing_date, employer_id } = req.body;
        const query = `UPDATE jobs SET title = ?, description = ?, requirements = ?, location = ?, salary_range = ?, employment_type = ?, closing_date = ?, employer_id = ? WHERE job_id = ? AND Deleted = FALSE`;
        const values = [title, description, requirements, location, salary_range, employment_type, closing_date, employer_id, req.params.id];

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
router.put('/applications/:id', async (req, res) => {
    try {
        const { job_id, user_id, application_date, interview_date, status } = req.body;
        const query = `UPDATE applications SET job_id = ?, user_id = ?, application_date = ?, interview_date = ?, status = ? WHERE application_id = ? AND Deleted = FALSE`;
        const values = [job_id, user_id, application_date, interview_date, status, req.params.id];

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
router.put('/training_programs/:id', async (req, res) => {
    try {
        const { company_id, training_name, training_provider, contact_email, contact_number } = req.body;
        const query = `UPDATE training_programs SET company_id = ?, training_name = ?, training_provider = ?, contact_email = ?, contact_number = ? WHERE training_id = ? AND Deleted = FALSE`;
        const values = [company_id, training_name, training_provider, contact_email, contact_number, req.params.id];

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
router.put('/training_details/:id', async (req, res) => {
    try {
        const { training_id, training_description, target_audience, training_objectives, training_duration, mode_of_training, start_date, end_date } = req.body;
        const query = `UPDATE training_details SET training_id = ?, training_description = ?, target_audience = ?, training_objectives = ?, training_duration = ?, mode_of_training = ?, start_date = ?, end_date = ? WHERE details_id = ? AND Deleted = FALSE`;
        const values = [training_id, training_description, target_audience, training_objectives, training_duration, mode_of_training, start_date, end_date, req.params.id];

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
router.put('/training_logistics/:id', async (req, res) => {
    try {
        const { training_id, location, training_schedule, training_fees, prerequisites, registration_deadline, participant_capacity } = req.body;
        const query = `UPDATE training_logistics SET training_id = ?, location = ?, training_schedule = ?, training_fees = ?, prerequisites = ?, registration_deadline = ?, participant_capacity = ? WHERE logistics_id = ? AND Deleted = FALSE`;
        const values = [training_id, location, training_schedule, training_fees, prerequisites, registration_deadline, participant_capacity, req.params.id];

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
router.put('/training_content/:id', async (req, res) => {
    try {
        const { training_id, training_modules, resources_provided, certification_offered } = req.body;
        const query = `UPDATE training_content SET training_id = ?, training_modules = ?, resources_provided = ?, certification_offered = ? WHERE content_id = ? AND Deleted = FALSE`;
        const values = [training_id, training_modules, resources_provided, certification_offered, req.params.id];

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
router.put('/training_participation/:id', async (req, res) => {
    try {
        const { training_id, user_id, registration_process, application_requirements, selection_process, job_market_relevance, career_opportunities, networking_opportunities } = req.body;
        const query = `UPDATE training_participation SET training_id = ?, user_id = ?, registration_process = ?, application_requirements = ?, selection_process = ?, job_market_relevance = ?, career_opportunities = ?, networking_opportunities = ? WHERE participation_id = ? AND Deleted = FALSE`;
        const values = [training_id, user_id, registration_process, application_requirements, selection_process, job_market_relevance, career_opportunities, networking_opportunities, req.params.id];

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
router.put('/training_compliance/:id', async (req, res) => {
    try {
        const { training_id, consent_and_privacy_policy, terms_and_conditions, promotional_material, sponsorship_details, faq_and_policies } = req.body;
        const query = `UPDATE training_compliance SET training_id = ?, consent_and_privacy_policy = ?, terms_and_conditions = ?, promotional_material = ?, sponsorship_details = ?, faq_and_policies = ? WHERE compliance_id = ? AND Deleted = FALSE`;
        const values = [training_id, consent_and_privacy_policy, terms_and_conditions, promotional_material, sponsorship_details, faq_and_policies, req.params.id];

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
router.put('/activity_log/:id', async (req, res) => {
    try {
        const { user_id, company_id, table_name, record_id, activity_type, details } = req.body;
        const query = `UPDATE activity_log SET user_id = ?, company_id = ?, table_name = ?, record_id = ?, activity_type = ?, details = ? WHERE log_id = ? AND Deleted = FALSE`;
        const values = [user_id, company_id, table_name, record_id, activity_type, details, req.params.id];

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
router.put('/notifications/:id', async (req, res) => {
    try {
        const { user_id, notification_type, message, is_read } = req.body;
        const query = `UPDATE notifications SET user_id = ?, notification_type = ?, message = ?, is_read = ? WHERE notification_id = ? AND Deleted = FALSE`;
        const values = [user_id, notification_type, message, is_read, req.params.id];

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
router.put('/news/:id', async (req, res) => {
    try {
        const { headline, body, link } = req.body;
        const query = `UPDATE news SET headline = ?, body = ?, link = ? WHERE news_id = ? AND Deleted = FALSE`;
        const values = [headline, body, link, req.params.id];

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
router.put('/user_news_read/:id', async (req, res) => {
    try {
        const { user_id, news_id, is_read, read_date } = req.body;
        const query = `UPDATE user_news_read SET user_id = ?, news_id = ?, is_read = ?, read_date = ? WHERE user_news_id = ? AND Deleted = FALSE`;
        const values = [user_id, news_id, is_read, read_date, req.params.id];

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
router.put('/interview_acceptance/:id', async (req, res) => {
    try {
        const { user_id, job_id, interview_date, interview_location, interview_time, interview_status } = req.body;
        const query = `UPDATE interview_acceptance SET user_id = ?, job_id = ?, interview_date = ?, interview_location = ?, interview_time = ?, interview_status = ? WHERE interview_id = ? AND Deleted = FALSE`;
        const values = [user_id, job_id, interview_date, interview_location, interview_time, interview_status, req.params.id];

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
router.put('/appointments/:id', async (req, res) => {
    try {
        const { user_id, appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason } = req.body;
        const query = `UPDATE appointments SET user_id = ?, appointment_type = ?, appointment_header = ?, appointment_description = ?, appointment_date = ?, appointment_time = ?, appointment_location = ?, appointment_status = ?, reason = ? WHERE appointment_id = ? AND Deleted = FALSE`;
        const values = [user_id, appointment_type, appointment_header, appointment_description, appointment_date, appointment_time, appointment_location, appointment_status, reason, req.params.id];

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