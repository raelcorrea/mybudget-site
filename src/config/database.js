const { Sequelize } = require('sequelize')

const database = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.SQLITE_STORAGE,
})

database
  .sync()
  .then((res) => console.log('Você está conectado com o banco de dados'))
  .catch((err) =>
    console.log('Não foi possivel conectar no banco de dados: ', err)
  )

module.exports = database
