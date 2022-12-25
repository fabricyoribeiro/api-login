const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=> {
  if(req.user.admin){
    res.send('esse dado é de admin')
  }else{
    res.status(401).send('Not admin: Acess denied')
  }
})

router.get('/free', auth, (req, res)=> {
  res.send('Esse dado so pode ser visto por quem esta logado')
})

module.exports = router