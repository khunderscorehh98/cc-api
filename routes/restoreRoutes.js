const express = require('express');
const router = express.Router();
const db = require('../config.js');

// /activity_log/:id route (RESTORE) - (Endpoint No. 1)
router.put('/activity_log/:id', function (req, res) {
    const { id } = req.params;

    // Validate that the log_id exists in the request
    if (!id) {
        return res.status(400).json({ error: 'Log ID is required.' });
    }

    // SQL query to update the Deleted field
    const query = `UPDATE activity_log SET Deleted = 0 WHERE log_id = ?`;

    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Activity log restored successfully.' });
        } else {
            res.status(404).json({ error: 'Activity log not found.' });
        }
    });
});





// /achievements_and_awards/:id route (RESTORE) - (Endpoint No. 2)
router.put('/achievements_and_awards/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE achievements_and_awards SET Deleted = FALSE WHERE achievement_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Achievement and award restored successfully.' });
        } else {
            res.status(404).json({ error: 'Achievement and award not found.' });
        }
    });
});

// /applications/:id route (RESTORE) - (Endpoint No. 3)
router.put('/applications/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE applications SET Deleted = FALSE WHERE application_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Application restored successfully.' });
        } else {
            res.status(404).json({ error: 'Application not found.' });
        }
    });
});

// /appointments/:id route (RESTORE) - (Endpoint No. 4)
router.put('/appointments/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE appointments SET Deleted = FALSE WHERE appointment_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Appointment restored successfully.' });
        } else {
            res.status(404).json({ error: 'Appointment not found.' });
        }
    });
});

// /certifications/:id route (RESTORE) - (Endpoint No. 5)
router.put('/certifications/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE certifications SET Deleted = FALSE WHERE certification_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Certification restored successfully.' });
        } else {
            res.status(404).json({ error: 'Certification not found.' });
        }
    });
});

// Continue changing all routes from `router.delete` to `router.put` in the same manner for endpoints 6 through 27...

// /company_details/:id route (RESTORE) - (Endpoint No. 6)
router.put('/company_details/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE company_details SET Deleted = FALSE WHERE details_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company details restored successfully.' });
        } else {
            res.status(404).json({ error: 'Company details not found.' });
        }
    });
});

// /user_contacts/:id route (RESTORE) - (Endpoint No. 7)
router.put('/user_contacts/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_contacts SET Deleted = FALSE WHERE contact_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User contact restored successfully.' });
        } else {
            res.status(404).json({ error: 'User contact not found.' });
        }
    });
});

// /user_profiles/:id route (RESTORE) - (Endpoint No. 8)
router.put('/user_profiles/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_profiles SET Deleted = FALSE WHERE user_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User profile restored successfully.' });
        } else {
            res.status(404).json({ error: 'User profile not found.' });
        }
    });
});

// /social_media_links/:id route (RESTORE) - (Endpoint No. 9)
router.put('/social_media_links/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE social_media_links SET Deleted = FALSE WHERE link_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Social media link restored successfully.' });
        } else {
            res.status(404).json({ error: 'Social media link not found.' });
        }
    });
});

// /jobs/:id route (RESTORE) - (Endpoint No. 10)
router.put('/jobs/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE jobs SET Deleted = FALSE WHERE job_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Job restored successfully.' });
        } else {
            res.status(404).json({ error: 'Job not found.' });
        }
    });
});

// /training_compliance/:id route (RESTORE) - (Endpoint No. 11)
router.put('/training_compliance/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_compliance SET Deleted = FALSE WHERE compliance_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training compliance restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training compliance not found.' });
        }
    });
});

// /training_content/:id route (RESTORE) - (Endpoint No. 12)
router.put('/training_content/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_content SET Deleted = FALSE WHERE content_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training content restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training content not found.' });
        }
    });
});

// /training_schedule/:id route (RESTORE) - (Endpoint No. 13)
router.put('/training_schedule/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_schedule SET Deleted = FALSE WHERE schedule_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training schedule restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training schedule not found.' });
        }
    });
});

// /training_modules/:id route (RESTORE) - (Endpoint No. 14)
router.put('/training_modules/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_modules SET Deleted = FALSE WHERE module_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training module restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training module not found.' });
        }
    });
});

// /news/:id route (RESTORE) - (Endpoint No. 15)
router.put('/news/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE news SET Deleted = FALSE WHERE news_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'News restored successfully.' });
        } else {
            res.status(404).json({ error: 'News not found.' });
        }
    });
});

// /interview_acceptance/:id route (RESTORE) - (Endpoint No. 16)
router.put('/interview_acceptance/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE interview_acceptance SET Deleted = FALSE WHERE interview_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Interview acceptance restored successfully.' });
        } else {
            res.status(404).json({ error: 'Interview acceptance not found.' });
        }
    });
});

// /user_news_read/:id route (RESTORE) - (Endpoint No. 17)
router.put('/user_news_read/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_news_read SET Deleted = FALSE WHERE user_news_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User news read record restored successfully.' });
        } else {
            res.status(404).json({ error: 'User news read record not found.' });
        }
    });
});

// /training_participation/:id route (RESTORE) - (Endpoint No. 18)
router.put('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_participation SET Deleted = FALSE WHERE participation_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training participation restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training participation not found.' });
        }
    });
});

// /training_programs/:id route (RESTORE) - (Endpoint No. 19)
router.put('/training_programs/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_programs SET Deleted = FALSE WHERE training_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training program restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training program not found.' });
        }
    });
});

// /contacts/:id route (RESTORE) - (Endpoint No. 20)
router.put('/contacts/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE contacts SET Deleted = FALSE WHERE contact_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Contact restored successfully.' });
        } else {
            res.status(404).json({ error: 'Contact not found.' });
        }
    });
});

// /users/:id route (RESTORE) - (Endpoint No. 21)
router.put('/users/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE users SET Deleted = FALSE WHERE user_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User restored successfully.' });
        } else {
            res.status(404).json({ error: 'User not found.' });
        }
    });
});

// /companies/:id route (RESTORE) - (Endpoint No. 22)
router.put('/companies/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE companies SET Deleted = FALSE WHERE company_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company restored successfully.' });
        } else {
            res.status(404).json({ error: 'Company not found.' });
        }
    });
});

// /company_details/:id route (RESTORE) - (Endpoint No. 23)
router.put('/company_details/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE company_details SET Deleted = FALSE WHERE details_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company details restored successfully.' });
        } else {
            res.status(404).json({ error: 'Company details not found.' });
        }
    });
});

// /contacts/:id route (RESTORE) - (Endpoint No. 24)
router.put('/contacts/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE contacts SET Deleted = FALSE WHERE contact_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Contact restored successfully.' });
        } else {
            res.status(404).json({ error: 'Contact not found.' });
        }
    });
});

// /training_participation/:id route (RESTORE) - (Endpoint No. 25)
router.put('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_participation SET Deleted = FALSE WHERE participation_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training participation restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training participation not found.' });
        }
    });
});

// /user_news_read/:id route (RESTORE) - (Endpoint No. 26)
router.put('/user_news_read/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_news_read SET Deleted = FALSE WHERE user_news_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User news read record restored successfully.' });
        } else {
            res.status(404).json({ error: 'User news read record not found.' });
        }
    });
});

// /training_participation/:id route (RESTORE) - (Endpoint No. 27)
router.put('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_participation SET Deleted = FALSE WHERE participation_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training participation restored successfully.' });
        } else {
            res.status(404).json({ error: 'Training participation not found.' });
        }
    });
});

module.exports = router;