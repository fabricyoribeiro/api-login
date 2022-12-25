const prisma = require('../lib/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { loginValidate, registerValidate} = require('./validate')

async function register(req,res){
  const {error} = registerValidate(req.body)
  if(error) {return res.status(400).send(error.message)}

  const findUser = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })

  if(findUser)
    return res.status(400).send('Email já existe')

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    }
  })

  res.status(200).send(user)
}

async function login(req,res){
  const {error} = loginValidate(req.body)
  if(error) {return res.status(400).send(error.message)}

  const findUser = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })

  if(!findUser)
    return res.status(400).send('Email ou senha incorreta')
  
  const passwordAndUserMacth = bcrypt.compareSync(req.body.password, findUser.password)

  if(!passwordAndUserMacth)
    return res.status(400).send('Email ou senha incorreta')

  const token = jwt.sign({_id: findUser._id, admin:findUser.admin}, process.env.TOKEN_SECRET)

  res.header('authorization-token', token)
  res.send('User Logged')
}

module.exports = {register, login}