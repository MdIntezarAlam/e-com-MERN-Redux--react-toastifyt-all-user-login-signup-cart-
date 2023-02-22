import axios from "axios"
import { actionTypes, BASE_URL } from "../../utils/cosntant"


//signup
export const signupUserAction = (signupValues) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.USER_SIGNUP_PENDING
        })
        try {
            const data = axios.post(`${BASE_URL}/signup`, signupValues, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            dispatch({
                type: actionTypes.USER_SIGNUP_SUCCESS,
                payload: data.user
            })
        } catch (error) {
            dispatch({
                type: actionTypes.USER_SIGNUP_PENDING,
                payload: error.message
            })
        }
    }
}
//login

export const loginUserAction = (loginValues) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.USER_LOGIN_PENDING
        })
        try {
            const { data } = axios.post(`${BASE_URL}/login`, loginValues, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            dispatch({
                type: actionTypes.USER_LOGIN_SUCCESS,
                payload: data.user
            })
        } catch (error) {
            dispatch({
                type: actionTypes.USER_LOGIN_FAIL,
                payload: error.message
            })
        }
    }
}
//load user
export const loadUserAction = () => {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOAD_USER_PENDING
        })
        try {
            const data =await axios.get(`${BASE_URL}/me`)
            // console.log(data);

            dispatch({
                type: actionTypes.LOAD_USER_SUCCESS,
                payload: data.user
            })
        } catch (error) {
            dispatch({
                type: actionTypes.LOAD_USER_FAIL,
                payload: error.message
            })
        }
    }
}