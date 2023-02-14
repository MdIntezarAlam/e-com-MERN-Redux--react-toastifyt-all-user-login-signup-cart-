import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { PAGE_PATH } from '../utils/cosntant'

const Header = () => {
    return (
        <div className='header'>
            <Link to={PAGE_PATH.LOGIN}>Login</Link>
            <Link to={PAGE_PATH.SIGNUP}>Signup</Link>
        </div>
    )
}

export default Header