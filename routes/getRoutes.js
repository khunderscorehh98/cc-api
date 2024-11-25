const express = require('express');
const router = express.Router();
const db = require('../config.js');

router.get('/activity_log', function (req, res) {
    db.query('SELECT * FROM activity_log WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/activity_log/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM activity_log WHERE log_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Activity log not found');
            }
        }
    });
});

router.get('/notifications', function (req, res) {
    db.query('SELECT * FROM notifications WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/notifications/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM notifications WHERE notification_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Notification not found');
            }
        }
    });
});

router.get('/applications', function (req, res) {
    db.query('SELECT * FROM applications WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/applications/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM applications WHERE application_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Application not found');
            }
        }
    });
});

router.get('/appointments', function (req, res) {
    db.query('SELECT * FROM appointments WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/appointments/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM appointments WHERE appointment_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Appointment not found');
            }
        }
    });
});

router.get('/companies', function (req, res) {
    db.query('SELECT * FROM companies WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/companies/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM companies WHERE company_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Company not found');
            }
        }
    });
});

router.get('/company_details', function (req, res) {
    db.query('SELECT * FROM company_details WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/company_details/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM company_details WHERE details_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Company detail not found');
            }
        }
    });
});

router.get('/contacts', function (req, res) {
    db.query('SELECT * FROM contacts WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/contacts/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM contacts WHERE contact_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Contact not found');
            }
        }
    });
});

router.get('/interview_acceptance', function (req, res) {
    db.query('SELECT * FROM interview_acceptance WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/interview_acceptance/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM interview_acceptance WHERE interview_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Interview acceptance not found');
            }
        }
    });
})

router.get('/jobs', function (req, res) {
    db.query('SELECT * FROM jobs WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
});

router.get('/jobs/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM jobs WHERE job_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Job not found');
            }
        }
    });
});

router.get('/news', function (req, res) {
    db.query('SELECT * FROM news WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/news/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM news WHERE news_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('News not found');
            }
        }
    });
})

router.get('/training_compliance', function (req, res) {
    db.query('SELECT * FROM training_compliance WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/training_compliance/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM training_compliance WHERE compliance_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Training compliance not found');
            }
        }
    });
})

router.get('/training_content', function (req, res) {
    db.query('SELECT * FROM training_content WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/training_content/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM training_content WHERE content_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Training content not found');
            }
        }
    });
})

router.get('/training_details', function (req, res) {
    db.query('SELECT * FROM training_details WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/training_details/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM training_details WHERE details_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Training details not found');
            }
        }
    });
})

router.get('/training_logistics', function (req, res) {
    db.query('SELECT * FROM training_logistics WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/training_logistics/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM training_logistics WHERE logistics_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Training logistics not found');
            }
        }
    });
})

router.get('/training_participation', function (req, res) {
    db.query('SELECT * FROM training_participation WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/training_participation/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM training_participation WHERE participation_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Training participants not found');
            }
        }
    });
})

router.get('/training_programs', function (req, res) {
    db.query('SELECT * FROM training_programs WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/training_programs/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM training_programs WHERE training_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('Training program not found');
            }
        }
    });
})

router.get('/user_contacts', function (req, res) {
    db.query('SELECT * FROM user_contacts WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/user_contacts/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM user_contacts WHERE contact_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('User contact not found');
            }
        }
    });
})

router.get('/user_news_read', function (req, res) {
    db.query('SELECT * FROM user_news_read WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/user_news_read/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM user_news_read WHERE user_news_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('User news read record not found');
            }
        }
    });
})

router.get('/user_profile', function (req, res) {
    db.query('SELECT * FROM user_profile WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/user_profile/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM user_profile WHERE user_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('User profile not found');
            }
        }
    });
})

router.get('/users', function (req, res) {
    db.query('SELECT * FROM users WHERE Deleted = FALSE', function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(
                result
            );
        }
    });
})

router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM users WHERE user_id = ${id} AND Deleted = FALSE`, function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.json(
                    result
                );
            } else {
                res.status(404).send('User not found');
            }
        }
    });
})

module.exports = router;