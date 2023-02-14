import { actionTypes, BASE_URL } from "../../utils/cosntant"
import axios from 'axios'

export const getProductAction = () => {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_PRODUCT_PENDING
        });
        try {
            const res = await axios.get(`${BASE_URL}/getproduct`)
            // console.log(res);
            dispatch({
                type: actionTypes.GET_PRODUCT_SUUCESS,
                payload: {
                    data: res.data
                }
            })
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCT_FAIL,
                message: "Somthing went wrong"
            })
        }
    }
}

//GET PRODUCT BY ID
export const getProductById = (id) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_PRODUCT_BY_ID_PENDING
        });
        try {
            const res = await axios.get(`${BASE_URL}/single/${id}`)

            dispatch({
                type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCT_BY_ID_FAIL,
                payload: error.message
            })
        }
    }
}