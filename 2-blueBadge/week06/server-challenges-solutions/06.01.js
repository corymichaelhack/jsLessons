// Auth Challenge

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Bronze
// router.post('/create', (req, res) => {
//     User.create({
//         username: req.body.username,
//         password: req.body.password
//     })
//         .then(user => {
//             res.status(200).json(user)
//         })
//         .catch(err => res.status(500).json({ error: err }))
// });

// Silver
// router.post('/login', (req, res) => {
//     User.findOne({ where: { username: req.body.username } })
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => res.status(500).json({ error : err }))
// })

// GOLD CREATE
router.post('/create', (req, res) => {
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(user => {
            let token = jwt.sign({ id : user.id }, 'Hello I am a secret', { expiresIn : 60 * 60 * 24 });
            res.status(200).json({
                user : user,
                token : token
            })
        })
        .catch(err => res.status(500).json({ error: err }))
});

// GOLD LOGIN
router.post('/login', (req, res) => {
    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if(user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if(matches) {
                        let token = jwt.sign({ id : user.id }, 'Hello I am a secret', { expiresIn : 60 * 60 * 24 });
                        res.status(200).json({
                            user : user,
                            token : token
                        });
                    } else {
                        res.status(401).json({ error : 'Username or password did not match. '})
                    }
                })
            }
        })
        .catch(err => res.status(500).json({ error : err }))
})


module.exports = router;