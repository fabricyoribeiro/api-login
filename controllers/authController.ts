import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
// dotenv.config()
// import { env } from 'process';

declare var process : {
  env: {
    TOKEN_SECRET: string
  }
}

import { Request, Response, NextFunction } from 'express'

export function auth(req: Request, res: Response, next: NextFunction){
  const token = req.header('authorization-token')

  if(!token) return res.status(401).send('Access denied')

  try {
    
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = userVerified
    next()
  } catch (error) {
    res.status(401).send('Acess denied')
  }
}