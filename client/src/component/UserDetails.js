import React, { useState } from 'react'
import '../styles/signup.login.css'
import { initialValues } from '../utils/cosntant'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PAGE_PATH } from '../utils/cosntant';

const UserDetails = () => {
    const navigate = useNavigate()

    const [userValues, setUserValues] = useState(initialValues)
    const [formValues, setFormValues] = useState()

    const inputChange = (e) => {
        const { name, value } = e.target
        setUserValues(() => {
            return {
                ...userValues, [name]: value
            }
        })

    }

    const formsubmit = async (e) => {
        e.preventDefault()
        const { name, email, phone, address, pinCode, city, country } = userValues
        if (name === "") {
            return toast.warning("plese enter name")
        } else if (email === "") {
            return toast.warning("plese enter email address")
        } else if (!email.includes("@")) {
            return toast.warning("plese enter valid email address")
        } else if (address === "") {
            return toast.warning("plese enter Adress")
        } else if (phone === "") {
            return toast.warning("please enter phone number")
        } else if (phone.length > 10 || phone.length < 10) {
            return toast.warning("phone number should be 10 digit")
        } else if (pinCode === "") {
            return toast.warning("please enter pinCode")
        } else if (city === "") {
            return toast.warning("please enter city name")
        } else if (country === "") {
            return toast.warning("please country name")
        } else {
            const res = await axios.post("/api/v1/userdetails", userValues)
            if (res.status === 200) {
                setFormValues(res)
                toast.success("Details has been submitted")
                setTimeout(() => {
                    navigate(PAGE_PATH.THANKYOU)
                }, 3000)
            }
        }
    }


    return (
        <div className='signup'>
            <form className='signup_form' onSubmit={formsubmit}>
                <p>Enter User Details</p>
                <input value={userValues.name} onChange={inputChange} type="text" placeholder='Enter username' name="name" />
                <input value={userValues.email} onChange={inputChange} type="text" placeholder='Enter email address' name="email" />
                <input value={userValues.phone} onChange={inputChange} type="number" placeholder='Enter phone number ' name="phone" />
                <input value={userValues.address} onChange={inputChange} type="text" placeholder='Enter Address ' name="address" />
                <input value={userValues.pinCode} onChange={inputChange} type="number" placeholder='Enter PinCode/Zip no ' name="pinCode" />
                <input value={userValues.city} onChange={inputChange} type="text" placeholder='Enter your City/Town ' name="city" />
                <input value={userValues.country} onChange={inputChange} type="text" placeholder='Enter Country ' name="country" />
                <div className='signup_btn_container'>
                    <button>Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default UserDetails