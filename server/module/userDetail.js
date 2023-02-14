import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        require: true
    },
    country: {
        type: String,
        required: true
    },

})


const UserDetails = new mongoose.model("UserDetails", userDetailsSchema)

export default UserDetails