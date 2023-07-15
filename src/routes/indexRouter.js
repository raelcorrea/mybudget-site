const indexRouter = require('express').Router()
indexRouter.get('/', function (req, res, next) {
  res.render('home', { title: 'Express' })
})

module.exports = indexRouter
