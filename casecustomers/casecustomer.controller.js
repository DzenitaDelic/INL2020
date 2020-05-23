const express = require('express');
const router = express.Router();
const casecustomerService = require('./casecustomer.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    casecustomerService.authenticate(req.body)
        .then(casecustomer => casecustomer ? res.json(casecustomer) : res.status(400).json({ message: 'Case not found' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    casecustomerService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    casecustomerService.getAll()
        .then(casecustomers => res.json(casecustomers))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    casecustomerService.getById(req.casecustomer.sub)
        .then(casecustomer => casecustomer ? res.json(casecustomer) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    casecustomerService.getById(req.params.id)
        .then(casecustomer => casecustomer ? res.json(casecustomer) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    casecustomerService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    casecustomerService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}