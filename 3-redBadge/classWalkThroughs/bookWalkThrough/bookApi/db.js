const Sequelize = require('sequelize')
// const sequelize = new Sequelize(process.env.NAME, process.env.DATABASE, process.env.PASS, {
//   host: 'localhost',
//   dialect: 'postgres'
// })

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 
  `postgresql://postgres:${ encodeURIComponent(process.env.PASS) }@localhost/bookapi`,
  {
    dialect: 'postgres'
  }
)

sequelize.authenticate()
  .then(() => console.log('Postgres db is connected'))
  .catch(err => console.log(err))

module.exports = sequelize