require('dotenv').config();

const express = require('express');
const app = express();
const pie = require('./controllers/piecontroller')
const user = require('./controllers/usercontroller')
const sequelize = require('./db');
const bodyParser = require('body-parser')

sequelize.sync();
// sequelize.sync({ force: true });
app.use(bodyParser.json())

app.use(require('./middleware/headers'))

// To explain the difference between webserver and local file path
// app.use(express.static(__dirname + '/public'));
// console.log(__dirname)

// app.get('/', (req, res) => res.render('index'));

app.use('/pies', pie)
app.use('/auth', user)

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`));