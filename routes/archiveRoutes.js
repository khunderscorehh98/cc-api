const express = require('express');
const router = express.Router();
const db = require('../config.js');

// Function to handle the PUT method for any table
function archiveRecord(tableName, idField) {
    return function (req, res) {
        const id = req.params.id;
        const query = `UPDATE ${tableName} SET Archive = 1 WHERE ${idField} = ?`;
        db.query(query, [id], function (err, result) {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                if (result.affectedRows > 0) {
                    res.send(`${tableName} record archived successfully`);
                } else {
                    res.status(404).send(`${tableName} record not found`);
                }
            }
        });
    };
}

// Define all routes
router.put('/activity_log/:id', archiveRecord('activity_log', 'log_id'));
router.put('/user_profiles/:id', archiveRecord('user_profiles', 'user_id'));
router.put('/companies/:id', archiveRecord('companies', 'company_id'));
router.put('/company_details/:id', archiveRecord('company_details', 'details_id'));
router.put('/jobs/:id', archiveRecord('jobs', 'job_id'));
router.put('/training_programs/:id', archiveRecord('training_programs', 'training_id'));
router.put('/training_details/:id', archiveRecord('training_details', 'details_id'));
router.put('/training_logistics/:id', archiveRecord('training_logistics', 'logistics_id'));
router.put('/training_content/:id', archiveRecord('training_content', 'content_id'));
router.put('/training_participation/:id', archiveRecord('training_participation', 'participation_id'));
router.put('/certifications/:id', archiveRecord('certifications', 'certification_id'));
router.put('/achievements_and_awards/:id', archiveRecord('achievements_and_awards', 'achievement_id'));
router.put('/social_media_links/:id', archiveRecord('social_media_links', 'link_id'));
router.put('/promotional_material/:id', archiveRecord('promotional_material', 'material_id'));
router.put('/faq_and_policies/:id', archiveRecord('faq_and_policies', 'faq_id'));
router.put('/contacts/:id', archiveRecord('contacts', 'contact_id'));
router.put('/user_news_read/:id', archiveRecord('user_news_read', 'user_news_id'));
router.put('/training_modules/:id', archiveRecord('training_modules', 'module_id'));
router.put('/training_schedule/:id', archiveRecord('training_schedule', 'schedule_id'));
router.put('/interview_acceptance/:id', archiveRecord('interview_acceptance', 'interview_id'));
router.put('/news/:id', archiveRecord('news', 'news_id'));
router.put('/training_compliance/:id', archiveRecord('training_compliance', 'compliance_id'));
router.put('/applications/:id', archiveRecord('applications', 'application_id'));
router.put('/appointments/:id', archiveRecord('appointments', 'appointment_id'));
router.put('/notifications/:id', archiveRecord('notifications', 'notification_id'));
router.put('/users/:id', archiveRecord('users', 'user_id'));
router.put('/user_contacts/:id', archiveRecord('user_contacts', 'contact_id'));

module.exports = router;
