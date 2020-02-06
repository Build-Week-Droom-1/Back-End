const express = require('express');
const Utils = require('../api/middleware')
const db = require('./jobs-model');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
        .then((jobs) => {
            res.status(200).json({ jobs })
        })
        .catch((err) => {
            res.json({ err })
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getById(id)
        .then(job => {
            res.status(200).json({ job })
        })
        .catch(err => {
            res.status(404).json({ err })
        })
});

router.post('/', Utils.validateJob, (req, res) => {
    const job = req.body;
    if (job) {
    db.insert(job)
        .then((job) => {
            res.status(200).json({ job })
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({ error })
        })
    } else {
        res.status(400).json({ errorMessage: "Please fill in all required fields" });
    }
});

router.delete('/:id', Utils.validateJobId, (req, res) => {
    const id = req.params.id;
    db.remove(id)
        .then(d => {
            res.status(201).json({ d })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ err })
        })
});

router.put('/:id', Utils.validateJobId, Utils.validateJob, (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.update(id, body)
        .then((job) => {
            res.status(201).json({ job })
        })
        .catch(err => {
            res.status(500).json({ message: 'something went wrong' })
        })
});

module.exports = router;
