import React from 'react'
import '../../styles/checkout.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PAGE_PATH } from '../../utils/cosntant'

const Checkout = () => {

  const { selectedProduct } = useSelector((state) => state.getProductReducer)

  return (
    <div className='check'>
      <div className='chck_box'>
        <div className='chck_img'>
          <img src={selectedProduct?.product?.image} />
        </div>
        <div className='check_right_box'>
          <span>Title: &nbsp;{selectedProduct?.product?.title}</span>
          <span>Price:&nbsp; {selectedProduct?.product?.price}</span>
          <span>decription: &nbsp;{selectedProduct?.product?.description}</span>
        </div>
      </div>
      <Link to={PAGE_PATH.USER_DETAILS } className='check_btn_container'>
        <button>Checkout</button>
      </Link>
    </div>
  )
}

export default Checkout