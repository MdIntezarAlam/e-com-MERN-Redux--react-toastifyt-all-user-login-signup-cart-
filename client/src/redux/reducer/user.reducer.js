import { actionTypes, statusTpes } from "../../utils/cosntant"


export const initialState = {
    isAuthenticated: false
}

export const userReducer = async (state = initialState, action) => {
    switch (action.types) {
        case actionTypes.USER_SIGNUP_PENDING:
            state = {
                ...state,
                isLoading: true,
                message: "please wait..."
            }
            return state
        case actionTypes.USER_SIGNUP_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                message: "user signup",
                user: action.payload.user,
                isAuthenticated: true
            }
            return state
        case actionTypes.USER_SIGNUP_FAIL:
            state = {
                ...state,
                isLoading: false,
                message: statusTpes.error,
                isAuthenticated: false
            }
            return state

        //login
        case actionTypes.USER_LOGIN_PENDING:
            state = {
                ...state,
                isLoading: true,
                message: "please wait..."
            }
            return state
        case actionTypes.USER_LOGIN_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                message: "user login",
                user: action.payload.user,
                isAuthenticated: true
            }
            return state
        case actionTypes.USER_LOGIN_FAIL:
            state = {
                ...state,
                isLoading: false,
                message: statusTpes.error,
                isAuthenticated: false
            }
            return state

            //load user
        case actionTypes.LOAD_USER_PENDING:
            state = {
                ...state,
                isLoading: true,
                message: "please wait..."
            }
            return state
        case actionTypes.LOAD_USER_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                message: "user login",
                user: action.payload.user,
                isAuthenticated: true
            }
            return state
        case actionTypes.LOAD_USER_FAIL:
            state = {
                ...state,
                isLoading: false,
                message: statusTpes.error,
                isAuthenticated: false
            }
            return state
        default: return state
    }
}