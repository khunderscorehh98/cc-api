const express = require('express');
const router = express.Router();
const db = require('../config.js');

// /activity_log/:id route (DELETE) - (Endpoint No. 1)
router.delete('/activity_log/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE activity_log SET Deleted = TRUE WHERE log_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Activity log deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Activity log not found.' });
        }
    });
});

// /achievements_and_awards/:id route (DELETE) - (Endpoint No. 2)
router.delete('/achievements_and_awards/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE achievements_and_awards SET Deleted = TRUE WHERE achievement_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Achievement and award deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Achievement and award not found.' });
        }
    });
});

// /applications/:id route (DELETE) - (Endpoint No. 3)
router.delete('/applications/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE applications SET Deleted = TRUE WHERE application_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Application deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Application not found.' });
        }
    });
});

// /appointments/:id route (DELETE) - (Endpoint No. 4)
router.delete('/appointments/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE appointments SET Deleted = TRUE WHERE appointment_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Appointment deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Appointment not found.' });
        }
    });
});

// /certifications/:id route (DELETE) - (Endpoint No. 5)
router.delete('/certifications/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE certifications SET Deleted = TRUE WHERE certification_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Certification deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Certification not found.' });
        }
    });
});

// /company_details/:id route (DELETE) - (Endpoint No. 6)
router.delete('/company_details/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE company_details SET Deleted = TRUE WHERE details_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company details deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Company details not found.' });
        }
    });
});

// /user_contacts/:id route (DELETE) - (Endpoint No. 7)
router.delete('/user_contacts/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_contacts SET Deleted = TRUE WHERE contact_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User contact deleted successfully.' });
        } else {
            res.status(404).json({ error: 'User contact not found.' });
        }
    });
});

// /user_profiles/:id route (DELETE) - (Endpoint No. 8)
router.delete('/user_profiles/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_profiles SET Deleted = TRUE WHERE user_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User profile deleted successfully.' });
        } else {
            res.status(404).json({ error: 'User profile not found.' });
        }
    });
});

// /social_media_links/:id route (DELETE) - (Endpoint No. 9)
router.delete('/social_media_links/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE social_media_links SET Deleted = TRUE WHERE link_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Social media link deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Social media link not found.' });
        }
    });
});

// /jobs/:id route (DELETE) - (Endpoint No. 10)
router.delete('/jobs/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE jobs SET Deleted = TRUE WHERE job_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Job deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Job not found.' });
        }
    });
});

// /training_compliance/:id route (DELETE) - (Endpoint No. 11)
router.delete('/training_compliance/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_compliance SET Deleted = TRUE WHERE compliance_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training compliance deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training compliance not found.' });
        }
    });
});

// /training_content/:id route (DELETE) - (Endpoint No. 12)
router.delete('/training_content/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_content SET Deleted = TRUE WHERE content_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training content deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training content not found.' });
        }
    });
});

// /training_schedule/:id route (DELETE) - (Endpoint No. 13)
router.delete('/training_schedule/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_schedule SET Deleted = TRUE WHERE schedule_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training schedule deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training schedule not found.' });
        }
    });
});

// /training_modules/:id route (DELETE) - (Endpoint No. 14)
router.delete('/training_modules/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_modules SET Deleted = TRUE WHERE module_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training module deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training module not found.' });
        }
    });
});

// /news/:id route (DELETE) - (Endpoint No. 15)
router.delete('/news/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE news SET Deleted = TRUE WHERE news_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'News deleted successfully.' });
        } else {
            res.status(404).json({ error: 'News not found.' });
        }
    });
});

// /interview_acceptance/:id route (DELETE) - (Endpoint No. 16)
router.delete('/interview_acceptance/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE interview_acceptance SET Deleted = TRUE WHERE interview_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Interview acceptance deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Interview acceptance not found.' });
        }
    });
});

// /user_news_read/:id route (DELETE) - (Endpoint No. 17)
router.delete('/user_news_read/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_news_read SET Deleted = TRUE WHERE user_news_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User news read record deleted successfully.' });
        } else {
            res.status(404).json({ error: 'User news read record not found.' });
        }
    });
});

// /training_participation/:id route (DELETE) - (Endpoint No. 18)
router.delete('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_participation SET Deleted = TRUE WHERE participation_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training participation deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training participation not found.' });
        }
    });
});

// /training_programs/:id route (DELETE) - (Endpoint No. 19)
router.delete('/training_programs/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_programs SET Deleted = TRUE WHERE training_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training program deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training program not found.' });
        }
    });
});

// /training_modules/:id route (DELETE) - (Endpoint No. 20)
router.delete('/training_modules/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_modules SET Deleted = TRUE WHERE module_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training module deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training module not found.' });
        }
    });
});

// /user_profiles/:id route (DELETE) - (Endpoint No. 21)
router.delete('/user_profiles/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_profiles SET Deleted = TRUE WHERE user_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User profile deleted successfully.' });
        } else {
            res.status(404).json({ error: 'User profile not found.' });
        }
    });
});

// /users/:id route (DELETE) - (Endpoint No. 22)
router.delete('/users/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE users SET Deleted = TRUE WHERE user_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User deleted successfully.' });
        } else {
            res.status(404).json({ error: 'User not found.' });
        }
    });
});

// /companies/:id route (DELETE) - (Endpoint No. 23)
router.delete('/companies/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE companies SET Deleted = TRUE WHERE company_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Company not found.' });
        }
    });
});

// /company_details/:id route (DELETE) - (Endpoint No. 24)
router.delete('/company_details/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE company_details SET Deleted = TRUE WHERE details_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Company details deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Company details not found.' });
        }
    });
});

// /contacts/:id route (DELETE) - (Endpoint No. 25)
router.delete('/contacts/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE contacts SET Deleted = TRUE WHERE contact_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Contact deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Contact not found.' });
        }
    });
});

// /training_participation/:id route (DELETE) - (Endpoint No. 26)
router.delete('/training_participation/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE training_participation SET Deleted = TRUE WHERE participation_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Training participation deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Training participation not found.' });
        }
    });
});

// /user_news_read/:id route (DELETE) - (Endpoint No. 27)
router.delete('/user_news_read/:id', function (req, res) {
    const { id } = req.params;
    const query = `UPDATE user_news_read SET Deleted = TRUE WHERE user_news_id = ?`;
    db.query(query, [id], function (err, result) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User news read record deleted successfully.' });
        } else {
            res.status(404).json({ error: 'User news read record not found.' });
        }
    });
});

module.exports = router;