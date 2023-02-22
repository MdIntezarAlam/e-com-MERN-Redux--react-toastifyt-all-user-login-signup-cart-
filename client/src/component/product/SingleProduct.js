import React, { useEffect } from 'react'
import '../../styles/singleProduct.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getProductById } from '../../redux/action/product.action'
import { useDispatch, useSelector } from 'react-redux'

const SingleProduct = () => {

    const { selectedProduct } = useSelector((state) => state.getProductReducer)
    const dispatch = useDispatch()
    const { productId } = useParams()

    useEffect(() => {
        dispatch(getProductById(productId))

    }, [dispatch])


    //authenticated





    return (
        <div className='single'>
            <div className='single_box'>
                <div className='single_left'>
                    <img src={selectedProduct?.product?.image} className="single_img" />
                </div>
                <div className='single_right'>
                    <div className='single_right_box'>
                        <h1>title:{selectedProduct?.product?.title}</h1>
                        <div className='single_price'>price:{selectedProduct?.product?.price}</div>
                        <div className='single_category'>category:{selectedProduct?.product?.category}</div>
                        <div className='single_description'>description:{selectedProduct?.product?.description}</div>
                        <Link to="/chckout">
                            <button className='single_btn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct