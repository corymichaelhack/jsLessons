/*
*  Type/Import Errors

1. usercontroller.js : line 1 - var router = require('express').Router()
2
3. db.js : line 18 - module.exports = sequelize;
4. game.js : line 1 - module.exports = function(sequelize, DataTypes)
5. gamecontroller.js : line 116 - module.exports = router;
6. validate-session: line 2 - var User = require('../db').import(//)

*  End Point Logic Errors

7. app.js : line 13 -  app.listen(4000, function())
8. app.js : line 9 - app.use(require('body-parser').json())
9. usercontroller.js : line 11 - passwordHash : bcrypt.hashSync()
10. gamecontroller.js : line 42 - req.user.id - add id
11. gamecontroller.js : line 9 - games: data
 */