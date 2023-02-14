import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`database is connected successfully on ${process.env.DB_URL}`);

    } catch (error) {
        console.log("database error", error)
    }
}
export default connectDB