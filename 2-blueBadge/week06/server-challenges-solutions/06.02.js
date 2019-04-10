// Create, Read, Update and Delete

// * Route needs to be added to index.js

// var animal = require('./controllers/animal-controller');

// app.use('/animal', animal);

// * router

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Animal = sequelize.import('../models/animal');

// Bronze
router.post('/create', (req, res) => {
    Animal.create({
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator
    })
        .then(
            createSuccess = animal => {
                res.status(200).json(animal);
            },

            createFail = err => {
                res.status(500).json({ error: err });
            }
        );
});

router.get('/', (req, res) => {
    Animal.findAll()
        .then(animals => res.status(200).json(animals))
        .catch(err => res.status(500).json({ error : err }))
})

// Silver
router.delete('/:id', (req, res) => {
    Animal.destroy({ where: { id: req.params.id } })
        .then(
            deleteSuccess = recordsChanged => {
                res.status(200).json({ message: `${recordsChanged} record(s) deleted.` })
            },

            deleteFail = err => {
                res.status(500).json({ message: 'Failed to delete', error: err })
            }
        );
});

// Gold
router.put('/:id', (req, res) => {
    Animal.update({
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator
    },
        {
            where: {
                id : req.params.id
            }
        })
        .then(
            updateSuccess = recordsChanged => {
                res.status(200).json({ message: 'Animal Updated' })
            },

            updateFail = err => {
                res.status(500).json({ message: 'Update failed', error: err })
            }
        )
})

module.exports = router;