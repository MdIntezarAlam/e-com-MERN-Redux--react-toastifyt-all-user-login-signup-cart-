import React, { useState } from 'react'
import '../styles/signup.login.css'
import { BASE_URL } from '../utils/cosntant';
import { initialValues } from '../utils/cosntant'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [signupValues, setSignupValues] = useState(initialValues)
    const [formValues, setFormValues] = useState()

    const inputChange = (e) => {
        const { name, value } = e.target
        setSignupValues(() => {
            return {
                ...signupValues, [name]: value
            }
        })

    }

    const formsubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, c_password, phone } = signupValues

        if (name === "") {
            return toast.warning("plese enter name")
        } else if (email === "") {
            return toast.warning("plese enter email address")
        } else if (!email.includes("@")) {
            return toast.warning("plese enter valid email address")
        } else if (password === "") {
            return toast.warning("plese enter password")
        } else if (password.length > 6) {
            return toast.warning("password length should not be greater than 6 char")
        } else if (c_password === "") {
            return toast.warning("plese enter confirm password")
        } else if (password !== c_password) {
            return toast.warning("password does not matching with current password")
        } else if (phone === "") {
            return toast.warning("please enter phone number")
        } else if (phone.length > 10 || phone.length < 10) {
            return toast.warning("phone number should be 10 digit")
        } else {
            const res = await axios.post(`${BASE_URL}/signup`, signupValues)
            if (res.status === 200) {
                setFormValues(res)
                toast.success("user signup")
                setTimeout(() => {
                    navigate("/login")
                }, 3000)
            }
            else {
                return toast.error("somthing went wrong")
            }
        }
    }


    return (
        <div className='signup'>
            <form className='signup_form' onSubmit={formsubmit}>
                <p>Signup</p>
                <input value={signupValues.name} onChange={inputChange} type="text" placeholder='Enter username' name="name" />
                <input value={signupValues.email} onChange={inputChange} type="text" placeholder='Enter email address' name="email" />
                <input value={signupValues.password} onChange={inputChange} type="password" placeholder='Enter password' name="password" />
                <input value={signupValues.c_password} onChange={inputChange} type="password" placeholder='Enter current password ' name="c_password" />
                <input value={signupValues.phone} onChange={inputChange} type="number" placeholder='Enter phone number ' name="phone" />
                <div className='signup_btn_container'>
                    <button>Signup</button>
                </div>
                <div className='signup_account'>
                    <span>already have an account? <a href="login">Login here</a></span>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup