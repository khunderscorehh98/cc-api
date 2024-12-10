const express = require('express');
const router = express.Router();
const db = require('../config.js');

// Function to handle GET methods for any table
function getRecords(tableName) {
    return function (req, res) {
        db.query(`SELECT * FROM ${tableName}`, function (err, result) {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.json(result);
            }
        });
    };
}

function getRecordById(tableName, idField) {
    return function (req, res) {
        const id = req.params.id;
        db.query(`SELECT * FROM ${tableName} WHERE ${idField} = ?`, [id], function (err, result) {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                if (result.length > 0) {
                    res.json(result);
                } else {
                    res.status(404).send(`${tableName} record not found`);
                }
            }
        });
    };
}

// Define all GET routes
router.get('/activity_log', getRecords('activity_log'));
router.get('/activity_log/:id', getRecordById('activity_log', 'log_id'));
router.get('/user_profiles', getRecords('user_profiles'));
router.get('/user_profiles/:id', getRecordById('user_profiles', 'user_id'));
router.get('/companies', getRecords('companies'));
router.get('/companies/:id', getRecordById('companies', 'company_id'));
router.get('/company_details', getRecords('company_details'));
router.get('/company_details/:id', getRecordById('company_details', 'details_id'));
router.get('/jobs', getRecords('jobs'));
router.get('/jobs/:id', getRecordById('jobs', 'job_id'));
router.get('/training_programs', getRecords('training_programs'));
router.get('/training_programs/:id', getRecordById('training_programs', 'training_id'));
router.get('/training_details', getRecords('training_details'));
router.get('/training_details/:id', getRecordById('training_details', 'details_id'));
router.get('/training_logistics', getRecords('training_logistics'));
router.get('/training_logistics/:id', getRecordById('training_logistics', 'logistics_id'));
router.get('/training_content', getRecords('training_content'));
router.get('/training_content/:id', getRecordById('training_content', 'content_id'));
router.get('/training_participation', getRecords('training_participation'));
router.get('/training_participation/:id', getRecordById('training_participation', 'participation_id'));
router.get('/certifications', getRecords('certifications'));
router.get('/certifications/:id', getRecordById('certifications', 'certification_id'));
router.get('/achievements_and_awards', getRecords('achievements_and_awards'));
router.get('/achievements_and_awards/:id', getRecordById('achievements_and_awards', 'achievement_id'));
router.get('/social_media_links', getRecords('social_media_links'));
router.get('/social_media_links/:id', getRecordById('social_media_links', 'link_id'));
router.get('/promotional_material', getRecords('promotional_material'));
router.get('/promotional_material/:id', getRecordById('promotional_material', 'material_id'));
router.get('/faq_and_policies', getRecords('faq_and_policies'));
router.get('/faq_and_policies/:id', getRecordById('faq_and_policies', 'faq_id'));
router.get('/contacts', getRecords('contacts'));
router.get('/contacts/:id', getRecordById('contacts', 'contact_id'));
router.get('/user_news_read', getRecords('user_news_read'));
router.get('/user_news_read/:id', getRecordById('user_news_read', 'user_news_id'));
router.get('/training_modules', getRecords('training_modules'));
router.get('/training_modules/:id', getRecordById('training_modules', 'module_id'));
router.get('/training_schedule', getRecords('training_schedule'));
router.get('/training_schedule/:id', getRecordById('training_schedule', 'schedule_id'));
router.get('/interview_acceptance', getRecords('interview_acceptance'));
router.get('/interview_acceptance/:id', getRecordById('interview_acceptance', 'interview_id'));
router.get('/news', getRecords('news'));
router.get('/news/:id', getRecordById('news', 'news_id'));
router.get('/training_compliance', getRecords('training_compliance'));
router.get('/training_compliance/:id', getRecordById('training_compliance', 'compliance_id'));
router.get('/applications', getRecords('applications'));
router.get('/applications/:id', getRecordById('applications', 'application_id'));
router.get('/appointments', getRecords('appointments'));
router.get('/appointments/:id', getRecordById('appointments', 'appointment_id'));
router.get('/notifications', getRecords('notifications'));
router.get('/notifications/:id', getRecordById('notifications', 'notification_id'));
router.get('/users', getRecords('users'));
router.get('/users/:id', getRecordById('users', 'user_id'));
router.get('/user_contacts', getRecords('user_contacts'));
router.get('/user_contacts/:id', getRecordById('user_contacts', 'contact_id'));

module.exports = router;