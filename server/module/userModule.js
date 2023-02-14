import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    c_password: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    }
})

const saltRound = 10
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, saltRound)
        this.c_password = await bcrypt.hash(this.c_password, saltRound)
    }
    next()
})

const User = new mongoose.model("User", userSchema)

export default User