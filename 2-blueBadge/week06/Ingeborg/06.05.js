/* App Debug Challenge */

/* 
**************************
DAY 5 REACT CHALLENGE
**************************
  Broken PERN App Challenge

  Links to Ingeborg's Broken App Repos:
    React: https://github.com/AlecxMoritz/react-app-challenge;
    Node: https://github.com/IngeborgSlegers/broken-app-challenge-server;

  The students are put into pods/groups of 3 or 4.
  As a group, they have to debug the two repos. 
  Students are not familiar with team git yet, so they have to do some peer coding and verbal communication between the front end and the back end to solve this challenge.

*/

/*  Broken React App */
/* 


*/

/*  Broken Node App */
// 55 errors

// * index.js */
// missing parentheses after const app = express;
// typo: usercontroller instead of userController;
// typo: zoocontroller instead of zooKeeperController;
// incorrect: db.sync() instead of sequelize.sync;


//* user.js */
// typo: AllonNull instead of AllowNull;

//* zookeeper.js */
// typo: module.export instead of exports;
// typo: food object contains DataType instead of DataTypes;
// typo: ussrId instead of userId ;
// return is missing and all lowercase ;

//* userController.js */
// typo: const cbrypt instead of bcrypt;
// incorrect import: require('bcryptjs') instead of require('bcrypt');
// incorrect import: const User = require('../models/index').sequelize.import('../models/user') instead of const User = require('../db').import('../models/user');
// incorrect: endpoints are flip-flopped;
// typo: cbrypt instead of bcrypt;
// incorrect: reqUser.password does not exist. Either create a variable for reqUser or change reqUser to req.body.user.password ;
// in the login success function, jwt secret is missing;
// in the login success function, token is set to sessionToken instead of token;
// in the login fail function, parameter is user instead of err;
// in createuser, the User.create() object is fullName instead of firstName and lastName;
// in createuser, the User.create() object is missing the number of salting;
// in createuser, the User.create() object is specilaity: req.body.specialty instead of specialty: req.specialty;
// in createuser the success function is missing declaring and assigning the token.
// in createuser the fail function is missing res.status(500).json(err.message);
// in :specialty, param is misspelled as speciality;
// in :specialty, (req, res) is misspelled as (res, res);
// in :specialty, where object is specialty: req.body.specialy instead of specialty: req.params.specialty;

//* zooKeeperController.js */
// require('./db') instead of require('../db');
// const ZooKeeper = require.sequelize('../models/ZooKeeper'); instead of const ZooKeeper = sequelize.import('../models/zookeeper');
// validateSession is not imported;
// in post: router.create needs to be router.post;
// in post: where needs to be req.user.id;
// in post: the body object needs to look like this:
/* 
  date: req.body.zoo.date,
  animal: req.body.zoo.animal, 
  feedingTime: req.body.zoo.feedingTime,
  notes: req.body.zoo.notes,
  food: req.body.zoo.food,
  userId: req.user.id
*/
// in post createSuccess function: parameter is zoos and json is set to zoo;
// in post createFail function: parameter is err, message looks for error;
// module.exports = zooKeeperController instead of module.exports = router;
// in findAll, it is not looking for the correct model;
// in findAll, either include the validateSession or remove the where attribute;
// in findAll, success parameter does not match json;
// in findAll, success function contains typo: jason;
// in findOne, parameters is spelled out;
// in findOne, either include the validateSession or remove the req.user.id part of the where object;
// in findOne, success data is jsonified twice;
// in put, '/id' is missing a colon;
// in put, it is not looking for the correct model;
// in put, the where object is missing req.user.id, validateSession, and req.params.id;
// in put, the action on the model is incorrect;
// in delete, the action on the router is incorrect;
// in delete, the action on the model is incorrect;
// in delete, the validateSession is in the wrong location;
// in delete, 'params' is missing;
// in delete, fat arrow is missing;

//* additional */
// package.json is looking for index.js instead of app.js: // rename app.js to index.js or change package.json to look for app.js;
// all dependencies but nodemon are missing;
// missing file: 'db.js'