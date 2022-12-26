import { prisma } from '../lib/prisma'
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { loginValidate, registerValidate} from './validate'

declare var process : {
  env: {
    TOKEN_SECRET: string
  }
}

export async function register(req: Request,res: Response){
  const {error} = registerValidate(req.body)
  if(error) {return res.status(400).send(error.message)}

  const findUser = await prisma.user.findUnique({
      
      where:{
        email: req.body.email
      }
  })

  if(findUser)
    return res.status(400).send('Email já existe')

  const salt = bcrypt.genSaltSync(10);

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt)
    }
  })

  res.status(200).send(user)
}

export async function login(req: Request,res: Response){
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

  const token = jwt.sign({id: findUser.id, admin:findUser.admin}, process.env.TOKEN_SECRET)

  res.header('authorization-token', token)
  res.send('User Logged')
}
