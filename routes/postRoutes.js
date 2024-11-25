const express = require('express');
const router = express.Router();
const db = require('../config/database');

// POST endpoint for creating new records in each table

// 'users' table
router.post('/users', async (req, res) => {
    try {
        const { full_name, email, password, date_of_birth, nationality } = req.body;
        const query = `INSERT INTO users (full_name, email, password, date_of_birth, nationality) VALUES (?, ?, ?, ?, ?)`;
        const values = [full_name, email, password, date_of_birth, nationality];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'User created successfully.', user_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_contacts' table
router.post('/user_contacts', async (req, res) => {
    try {
        const { user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization } = req.body;
        const query = `INSERT INTO user_contacts (user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [user_id, phone_number, location, linkedin_profile, portfolio_link, languages_spoken, work_authorization];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'User contact created successfully.', contact_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'user_profiles' table
router.post('/user_profiles', async (req, res) => {
    try {
        const { user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability } = req.body;
        const query = `INSERT INTO user_profiles (user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [user_id, profile_picture, resume_link, experience_level, skills, educational_background, previous_job_titles, certifications, preferred_job_titles, employment_type, desired_salary_range, industry_of_interest, preferred_work_location, availability];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'User profile created successfully.', profile_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'companies' table
router.post('/companies', async (req, res) => {
    try {
        const { company_name, email, password, contact_number, company_logo, business_registration_number, tax_identification_number, terms_of_service_accepted } = req.body;
        const query = `INSERT INTO companies (company_name, email, password, contact_number, company_logo, business_registration_number, tax_identification_number, terms_of_service_accepted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [company_name, email, password, contact_number, company_logo, business_registration_number, tax_identification_number, terms_of_service_accepted];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'Company created successfully.', company_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'company_details' table
router.post('/company_details', async (req, res) => {
    try {
        const { company_id, industry_type, company_size, headquarters_location, additional_office_locations, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards } = req.body;
        const query = `INSERT INTO company_details (company_id, industry_type, company_size, headquarters_location, additional_office_locations, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [company_id, industry_type, company_size, headquarters_location, additional_office_locations, year_founded, company_website, company_description, social_media_links, company_culture_info, achievements_and_awards];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'Company details created successfully.', details_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'contacts' table
router.post('/contacts', async (req, res) => {
    try {
        const { company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info } = req.body;
        const query = `INSERT INTO contacts (company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info) VALUES (?, ?, ?, ?, ?)`;
        const values = [company_id, primary_contact_name, contact_person_job_title, contact_person_email, alternate_contact_info];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'Contact created successfully.', contact_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'jobs' table
router.post('/jobs', async (req, res) => {
    try {
        const { title, description, requirements, location, salary_range, employment_type, closing_date, employer_id } = req.body;
        const query = `INSERT INTO jobs (title, description, requirements, location, salary_range, employment_type, closing_date, employer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [title, description, requirements, location, salary_range, employment_type, closing_date, employer_id];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'Job created successfully.', job_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// 'applications' table
router.post('/applications', async (req, res) => {
    try {
        const { job_id, user_id, interview_date, status } = req.body;
        const query = `INSERT INTO applications (job_id, user_id, interview_date, status) VALUES (?, ?, ?, ?)`;
        const values = [job_id, user_id, interview_date, status];

        const [result] = await db.execute(query, values);
        res.status(201).json({ message: 'Application created successfully.', application_id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Continue for the remaining tables...
