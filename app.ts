require('dotenv').config()
import express from 'express'
const app = express()
const userRouter = require('./routes/userRouter')
// import {} from './routes/userRouter'
const adminRouter = require('./routes/adminRouter')

app.use('/user', express.json(), userRouter)

app.use('/admin',express.json(), adminRouter)

app.listen(process.env.PORT, ()=> {console.log('listening on port 3000')})