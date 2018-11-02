require('dotenv').config()

const express = require('express')
const app = express()
const sequelize = require('./db')
const bodyParser = require('body-parser')

// sequelize.sync({ force: true })
sequelize.sync()

app.use(require('cors')())

app.use(bodyParser.json())

app.use('/books', require('./controllers/bookcontroller'))

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`))