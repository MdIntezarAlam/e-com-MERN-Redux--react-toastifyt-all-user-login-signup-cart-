import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Signup, UserDetails } from './component'
import { PAGE_PATH } from './utils/cosntant'
import 'react-toastify/dist/ReactToastify.css';
import SingleProduct from './component/product/SingleProduct';
import Checkout from './component/product/Checkout';
import Thankyou from './component/Thankyou';
import Header from './component/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={PAGE_PATH.PRODUCT} element={<Home />} />
        <Route path={PAGE_PATH.SIGNUP} element={<Signup />} />
        <Route path={PAGE_PATH.LOGIN} element={<Login />} />
        <Route path={PAGE_PATH.USER_DETAILS} element={<UserDetails />} />
        <Route path={PAGE_PATH.SINGLE_PRODUCT} element={<SingleProduct />} />
        <Route path={PAGE_PATH.CHCKOUT} element={<Checkout />} />
        <Route path={PAGE_PATH.THANKYOU} element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App