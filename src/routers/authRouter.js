import express from 'express'
import signupController from '../controllers/auth/signupController.js'
import loginController from '../controllers/auth/login.controller.js'



const router = express.Router()

router.post('/sinup', signupController)
router.post('/login', loginController)
router.post('/logout', logoutController)

export default router