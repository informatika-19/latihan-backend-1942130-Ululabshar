const router = require('express').Router()
const userController = require('../controller/user')

router.post('/register',(req, res) =>{
    userController.register(req.body)
    .then(result =>res.json(result))
    .catch(err => res.json(err))
  })

  module.exports = router