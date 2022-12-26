require('dotenv').config()
import express from 'express'
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const app = express()

app.use('/user', express.json(), userRouter)

app.use('/admin',express.json(), adminRouter)

app.listen(process.env.PORT, ()=> {console.log('listening on port 3000')})