let express = require('express')
let router = express.Router()
let path = require('path')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

router.get('/content', (req, res, next) => {
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.sendFile(path.join(__dirname, '../data/content.json'))
})

module.exports = router
