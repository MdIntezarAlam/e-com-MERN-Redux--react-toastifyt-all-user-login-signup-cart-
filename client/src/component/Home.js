import React, { useEffect } from 'react'
import '../styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../redux/action/product.action'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.getProductReducer)

    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch]);
    
    return (
        <div className='home'>
            <div className='home_box'>
                {products.product && products.product.length > 0 ? products.product.map((product) => (
                    <div className='home_inner_box' key={product._id}>
                        <div className='img'>
                            <img src={product?.image} alt="product" />
                        </div>
                        <div className='text_container'>
                            <span>title:{product?.title}</span>
                            <span>Price:{product?.price}</span>
                            <span>Category:{product?.category}</span>
                        </div>
                        <Link to={`/api/v1/single/${product._id}`} className='btn_container'>
                            <button>View Details</button>
                        </Link>
                    </div>
                )) : <span>loading...</span>}
            </div>
        </div>
    )
}
export default Home