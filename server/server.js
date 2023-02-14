import epxress from 'express'
import dotenv from 'dotenv'
import connectDB from './database/databse.js'
import cors from 'cors'
import userRouter from './router/userRouter.js'
import userDetailRouter from './router/userDetailsRouter.js'
import productRouter from './router/productRouter.js'

const app = epxress()
app.use(cors())
app.use(epxress.json())

dotenv.config({
    path: "config/.env"
})


app.use("/api/v1", userRouter)
app.use("/api/v1", userDetailRouter)
app.use("/api/v1", productRouter)



app.listen(process.env.PORT, () => {
    console.log(`server is listining on localhost ${process.env.PORT}`);
})
connectDB()