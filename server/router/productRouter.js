import express from 'express'
import { getProduct, getProductById, postProduct } from '../controller/productController.js'

const router = express.Router()

router
    .route("/postProduct")
    .post(postProduct)
router
    .route("/getproduct")
    .get(getProduct)
router
    .route("/single/:id")
    .get(getProductById)



export default router

