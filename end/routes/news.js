let express = require('express')
let router = express.Router()
let path = require('path')

router.get('/', (req, res, next) => {
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.status(200).sendFile(path.join(__dirname, '../data/news.json'))
})

module.exports = router
