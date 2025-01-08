const express = require('express');
const router = express.Router();
const db = require('../config.js');

// /activity_log route (Table No. 1)
router.get('/activity_log', function (req, res) {
    db.query('SELECT * FROM activity_log', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /activity_log/:id route (Table No. 1)
router.get('/activity_log/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM activity_log WHERE log_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Activity log not found');
            }
        }
    });
});

// /user_profiles route (Table No. 2)
router.get('/user_profiles', function (req, res) {
    db.query('SELECT * FROM user_profiles', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /user_profiles/:id route (Table No. 2)
router.get('/user_profiles/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM user_profiles WHERE user_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('User profile not found');
            }
        }
    });
});

// /companies route (Table No. 3)
router.get('/companies', function (req, res) {
    db.query('SELECT * FROM companies', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /companies/:id route (Table No. 3)
router.get('/companies/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM companies WHERE company_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Company not found');
            }
        }
    });
});

// /company_details route (Table No. 4)
router.get('/company_details', function (req, res) {
    db.query('SELECT * FROM company_details', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /company_details/:id route (Table No. 4)
router.get('/company_details/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM company_details WHERE details_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Company details not found');
            }
        }
    });
});

// /jobs route (Table No. 5)
router.get('/jobs', function (req, res) {
    db.query('SELECT * FROM jobs', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /jobs/:id route (Table No. 5)
router.get('/jobs/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM jobs WHERE job_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Job not found');
            }
        }
    });
});

// /training_programs route (Table No. 6)
router.get('/training_programs', function (req, res) {
    db.query('SELECT * FROM training_programs', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_programs/:id route (Table No. 6)
router.get('/training_programs/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_programs WHERE training_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training program not found');
            }
        }
    });
});

// /training_details route (Table No. 7)
router.get('/training_details', function (req, res) {
    db.query('SELECT * FROM training_details', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_details/:id route (Table No. 7)
router.get('/training_details/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_details WHERE details_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training details not found');
            }
        }
    });
});

// /training_logistics route (Table No. 8)
router.get('/training_logistics', function (req, res) {
    db.query('SELECT * FROM training_logistics', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_logistics/:id route (Table No. 8)
router.get('/training_logistics/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_logistics WHERE logistics_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training logistics not found');
            }
        }
    });
});

// /training_content route (Table No. 9)
router.get('/training_content', function (req, res) {
    db.query('SELECT * FROM training_content', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_content/:id route (Table No. 9)
router.get('/training_content/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_content WHERE content_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training content not found');
            }
        }
    });
});

// /training_participation route (Table No. 10)
router.get('/training_participation', function (req, res) {
    db.query('SELECT * FROM training_participation', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_participation/:id route (Table No. 10)
router.get('/training_participation/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_participation WHERE participation_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training participation not found');
            }
        }
    });
});

// /certifications route (Table No. 11)
router.get('/certifications', function (req, res) {
    db.query('SELECT * FROM certifications', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /certifications/:id route (Table No. 11)
router.get('/certifications/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM certifications WHERE certification_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Certification not found');
            }
        }
    });
});

// /achievements_and_awards route (Table No. 12)
router.get('/achievements_and_awards', function (req, res) {
    db.query('SELECT * FROM achievements_and_awards', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /achievements_and_awards/:id route (Table No. 12)
router.get('/achievements_and_awards/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM achievements_and_awards WHERE achievement_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Achievement or award not found');
            }
        }
    });
});

// /social_media_links route (Table No. 13)
router.get('/social_media_links', function (req, res) {
    db.query('SELECT * FROM social_media_links', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /social_media_links/:id route (Table No. 13)
router.get('/social_media_links/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM social_media_links WHERE link_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Social media link not found');
            }
        }
    });
});

// /promotional_material route (Table No. 14)
router.get('/promotional_material', function (req, res) {
    db.query('SELECT * FROM promotional_material', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /promotional_material/:id route (Table No. 14)
router.get('/promotional_material/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM promotional_material WHERE material_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Promotional material not found');
            }
        }
    });
});

// /faq_and_policies route (Table No. 15)
router.get('/faq_and_policies', function (req, res) {
    db.query('SELECT * FROM faq_and_policies', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /faq_and_policies/:id route (Table No. 15)
router.get('/faq_and_policies/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM faq_and_policies WHERE faq_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('FAQ or policy not found');
            }
        }
    });
});

// /contacts route (Table No. 16)
router.get('/contacts', function (req, res) {
    db.query('SELECT * FROM contacts', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /contacts/:id route (Table No. 16)
router.get('/contacts/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM contacts WHERE contact_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Contact not found');
            }
        }
    });
});

// /user_news_read route (Table No. 17)
router.get('/user_news_read', function (req, res) {
    db.query('SELECT * FROM user_news_read', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /user_news_read/:id route (Table No. 17)
router.get('/user_news_read/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM user_news_read WHERE user_news_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('User news read record not found');
            }
        }
    });
});

// /training_modules route (Table No. 18)
router.get('/training_modules', function (req, res) {
    db.query('SELECT * FROM training_modules', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_modules/:id route (Table No. 18)
router.get('/training_modules/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_modules WHERE module_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training module not found');
            }
        }
    });
});

// /training_schedule route (Table No. 19)
router.get('/training_schedule', function (req, res) {
    db.query('SELECT * FROM training_schedule', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_schedule/:id route (Table No. 19)
router.get('/training_schedule/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_schedule WHERE schedule_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training schedule not found');
            }
        }
    });
});

// /interview_acceptance route (Table No. 20)
router.get('/interview_acceptance', function (req, res) {
    db.query('SELECT * FROM interview_acceptance', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /interview_acceptance/:id route (Table No. 20)
router.get('/interview_acceptance/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM interview_acceptance WHERE interview_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Interview acceptance not found');
            }
        }
    });
});

// /news route (Table No. 21)
router.get('/news', function (req, res) {
    db.query('SELECT * FROM news', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /news/:id route (Table No. 21)
router.get('/news/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM news WHERE news_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('News not found');
            }
        }
    });
});

// /training_compliance route (Table No. 22)
router.get('/training_compliance', function (req, res) {
    db.query('SELECT * FROM training_compliance', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /training_compliance/:id route (Table No. 22)
router.get('/training_compliance/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM training_compliance WHERE compliance_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Training compliance not found');
            }
        }
    });
});

// /applications route (Table No. X)
router.get('/applications', function (req, res) {
    db.query('SELECT * FROM applications', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /applications/:id route (Table No. X)
router.get('/applications/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM applications WHERE application_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Application not found');
            }
        }
    });
});

// /appointments route (Table No. X)
router.get('/appointments', function (req, res) {
    db.query('SELECT * FROM appointments', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /appointments/:id route (Table No. X)
router.get('/appointments/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM appointments WHERE appointment_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Appointment not found');
            }
        }
    });
});

// /notifications route (Table No. X)
router.get('/notifications', function (req, res) {
    db.query('SELECT * FROM notifications', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /notifications/:id route (Table No. X)
router.get('/notifications/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM notifications WHERE notification_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Notification not found');
            }
        }
    });
});

// /users route (Table No. X)
router.get('/users', function (req, res) {
    db.query('SELECT * FROM users', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /users/:id route (Table No. X)
router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE user_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('User not found');
            }
        }
    });
});

// /user_contacts route (Table No. X)
router.get('/user_contacts', function (req, res) {
    db.query('SELECT * FROM user_contacts', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// /user_contacts/:id route (Table No. X)
router.get('/user_contacts/:id', function (req, res) {
    const id = req.params.id;
    db.query('SELECT * FROM user_contacts WHERE user_id = ?', [id], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('User contact not found');
            }
        }
    });
});


module.exports = router;