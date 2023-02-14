//routers
export const BASE_URL = "http://localhost:5000/api/v1"

export const PAGE_PATH = {
    PRODUCT: "/",
    SIGNUP: "/signup",
    LOGIN: "/login",
    USER_DETAILS: "/user_details",
    SINGLE_PRODUCT: "/api/v1/single/:productId",
    CHCKOUT: "/chckout",
    THANKYOU: "/thankyou",
}


//loginSignup initialValues
export const initialValues = {
    name: "",
    email: "",
    password: "",
    c_password: "",
    phone: "",
    address: "",
    city: "",
    pinCode: "",
    country: ""
}

//redux 
export const actionTypes = {
    GET_PRODUCT_PENDING: "GET_PRODUCT_PENDING",
    GET_PRODUCT_SUUCESS: "GET_PRODUCT_SUUCESS",
    GET_PRODUCT_FAIL: "GET_PRODUCT_FAIL",
    //get product id
    GET_PRODUCT_BY_ID_PENDING: "GET_PRODUCT_BY_ID_PENDING",
    GET_PRODUCT_BY_ID_SUCCESS: "GET_PRODUCT_BY_ID_SUCCESS",
    GET_PRODUCT_BY_ID_FAIL: "GET_PRODUCT_BY_ID_FAIL",

    //AUTH
    AUTH_PENDING: "AUTH PENDING",
    AUTH_SUCCESS: "AUTH SUCCESS",
    AUTH_FAILED: "AUTH FAILED",


    //user signup
    USER_SIGNUP_PENDING: "USER_SIGNUP_PENDING",
    USER_SIGNUP_SUCCESS: "USER_SIGNUP_SUCCESS",
    USER_SIGNUP_FAIL: "USER_SIGNUP_FAIL",
    //user LOGIN
    USER_LOGIN_PENDING: "USER_LOGIN_PENDING",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
}

export const statusTpes = {
    error: "error",
    info: "Info",
    success: "success",
}