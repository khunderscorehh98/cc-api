const express = require('express');
const router = express.Router();
const db = require('../config');

// Generic function to partially update a record by ID
const patchRecord = (table, idColumn, id, data, res) => {
    const fields = Object.keys(data).map(field => `${field} = ?`).join(', ');
    const query = `UPDATE ${table} SET ${fields} WHERE ${idColumn} = ?`;
    db.query(query, [...Object.values(data), id], (err, result) => {
        if (err) return res.status(500).send(`Error updating ${table}`);
        if (result.affectedRows === 0) return res.status(404).send(`${table} not found`);
        res.status(200).send(`${table} partially updated successfully`);
    });
};

// Routes for partially updating records
router.patch('/jobs/:id', (req, res) => patchRecord('jobs', 'job_id', req.params.id, req.body, res));
router.patch('/employers/:id', (req, res) => patchRecord('employers', 'employer_id', req.params.id, req.body, res));
router.patch('/job_seekers/:id', (req, res) => patchRecord('job_seekers', 'seeker_id', req.params.id, req.body, res));
router.patch('/applications/:id', (req, res) => patchRecord('applications', 'application_id', req.params.id, req.body, res));
router.patch('/job_categories/:id', (req, res) => patchRecord('job_categories', 'category_id', req.params.id, req.body, res));

module.exports = router;
