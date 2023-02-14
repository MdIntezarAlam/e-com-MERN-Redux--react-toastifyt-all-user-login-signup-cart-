import express from 'express'
import { userSignup , userLogin} from '../controller/userController.js'

const router = express.Router()

router
    .post("/signup", userSignup)
    .post("/login", userLogin)

export default router

