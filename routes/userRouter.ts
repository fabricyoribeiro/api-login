import express from 'express'
// const userController = require('../controllers/userController')
import {login, register} from '../controllers/userController'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

module.exports = router
