import express from 'express'
import { userDetails } from '../controller/userDetailsController.js'

const router = express.Router()

router
   .post("/userdetails", userDetails)

export default router

