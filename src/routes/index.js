const express = require('express')
const transactionRouter = require('../app/transaction/transactionRouter')
const router = express.Router()

// Transaction Router
router.use('/transaction', transactionRouter(router))

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
