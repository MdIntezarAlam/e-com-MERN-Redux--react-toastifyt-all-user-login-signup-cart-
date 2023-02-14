import { actionTypes, statusTpes } from "../../utils/cosntant"

const ininttialState = {
    isloading: false,
    status: "",
    message: null,
    products: [],
    selectedProduct: null
}


export const getProductReducer = (state = ininttialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_PENDING:
            state = {
                ...state,
                isloading: true,
                status: statusTpes.info,
                message: "please wait while we are fetching products...",
            }
            return state
        case actionTypes.GET_PRODUCT_SUUCESS:
            state = {
                ...state,
                isloading: false,
                status: statusTpes.success,
                message: "products fetched",
                products: action.payload.data || []
            }
            return state
        case actionTypes.GET_PRODUCT_FAIL:
            state = {
                ...state,
                isloading: false,
                status: statusTpes.error,
                message: statusTpes.error,
                products: []
            }
            return state

        // get Product by id
        case actionTypes.GET_PRODUCT_BY_ID_PENDING:
            state = { ...state, isLoading: true, status: statusTpes.info, message: "Please wait while we are fetching product details..." }
            return state;
        case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            state = { ...state, isLoading: false, status: statusTpes.success, message: "Product details fetched!", selectedProduct: action.payload.data}
            return state;
        case actionTypes.GET_PRODUCT_BY_ID_FAIL:
            state = { ...state, isLoading: false, status: statusTpes.error, message: action.payload.message, selectedProduct: null }
            return state;
        default: return state
    }
}