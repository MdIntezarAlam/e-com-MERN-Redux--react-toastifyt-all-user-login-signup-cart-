import express from 'express'
import { userSignup , userLogin, getUser} from '../controller/userController.js'

const router = express.Router()

router
    .post("/signup", userSignup)
    .post("/login", userLogin)
    .get("/me", getUser)

export default router

