import express,  { Request, Response } from 'express'
import  {auth} from '../controllers/authController'

const router = express.Router()

router.get('/', auth, (req: Request, res: Response)=> {
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