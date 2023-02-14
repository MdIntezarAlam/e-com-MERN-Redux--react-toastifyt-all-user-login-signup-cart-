import { actionTypes, statusTpes } from "../../utils/cosntant"

const ininttialState = {
    isloading: false,
    status: "",
    message: null,
    product: [],
    isAuthenticated: true
}


export const getProductReducer = (state = ininttialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_PENDING:
            state = {
                ...state,
                isloading: true,
                status: statusTpes.info,
                message: "please wait while we are fetching product...",
            }
            return state
        case actionTypes.GET_PRODUCT_SUUCESS:
            state = {
                ...state,
                isloading: false,
                status: statusTpes.success,
                message: "product fetched",
                product: action.payload.data || []
            }
            return state
        case actionTypes.GET_PRODUCT_FALS:
            state = {
                ...state,
                isloading: false,
                status: statusTpes.error,
                message: action.payload.message,
                product: []
            }
            return state
        default: return state
    }
}