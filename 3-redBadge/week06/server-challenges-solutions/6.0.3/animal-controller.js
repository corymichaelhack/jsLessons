var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Animal = sequelize.import('../models/animal');

// * validateSession is new and all additions where validateSession is a method argument are new
var validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const newAnimal = {
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator,
        // * new
        userId: req.user.id
    }

    Animal.create(newAnimal)
        .then(
            createSuccess = animal => {
                res.status(200).json(animal);
            },

            createFail = err => {
                res.status(500).json({ error: err });
            }
        )
});

router.get('/', validateSession, (req, res) => {
    Animal.findAll({
        // * new
        where: {
            userId: req.user.id
        }
    })
        .then(animals => res.status(200).json(animals))
        .catch(err => res.status(500).json({ error: err }))
});

router.delete('/:id', validateSession, (req, res) => {
    Animal.destroy({
        where: {
            id: req.params.id,
            // * new
            userId: req.user.id
        }
    })
        .then(
            deleteSuccess = recordsChanged => {
                res.status(200).json({ message: `${recordsChanged} record(s) changes.` });
            },

            deleteFail = err => {
                res.status(500).json({ message: 'Failed to delete', error: err })
            }
        )
})

router.put('/update/:id', validateSession, (req, res) => {
    Animal.update(req.body, {
        where: {
            id: req.params.id,
            // * new
            userId: req.user.id
        }
    })
        .then(animal => res.status(200).json(animal))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;