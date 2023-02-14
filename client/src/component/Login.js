import React, { useState } from 'react'
import '../styles/signup.login.css'
import { BASE_URL } from '../utils/cosntant';
import { initialValues } from '../utils/cosntant'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    const [loginValues, setLoginValues] = useState(initialValues)
    const [formValues, setFormValues] = useState()

    const inputChange = (e) => {
        const { name, value } = e.target
        setLoginValues(() => {
            return {
                ...loginValues, [name]: value
            }
        })

    }

    const formsubmit = async (e) => {
        e.preventDefault()
        const {  email, password, c_password, } = loginValues

        if (email === "") {
            return toast.warning("plese enter email")
        } else if (!email.includes("@")) {
            return toast.warning("plese enter valid email address")
        } else if (password === "") {
            return toast.warning("plese enter password")
        } else if (password.length > 6) {
            return toast.warning("password length should not be greater than 6 char")
        } else if (c_password === "") {
            return toast.warning("plese enter current password")
        } else if (password !== c_password) {
            return toast.warning("password does not matching with current password")
        } else {

            const res = await axios.post(`${BASE_URL}/login`, loginValues)
            if (res.status === 200) {
                setFormValues(res)
                toast.success("user login")
                setTimeout(() => {
                    navigate("/")
                }, 3000)
            }
        }
    }
    return (
        <div className='signup'>
            <form className='signup_form' onSubmit={formsubmit}>
                <p>Login</p>
                <input value={loginValues.email} onChange={inputChange} type="text" placeholder='Enter email address' name="email" />
                <input value={loginValues.password} onChange={inputChange} type="password" placeholder='Enter password' name="password" />
                <input value={loginValues.c_password} onChange={inputChange} type="password" placeholder='Enter current password ' name="c_password" />
                <div className='signup_btn_container'>
                    <button>Login</button>
                </div>
                <div className='signup_account'>
                    <span>don't have an account? <a href="/signup">signup here</a></span>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login