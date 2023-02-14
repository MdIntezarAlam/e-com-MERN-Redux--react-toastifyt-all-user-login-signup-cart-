import { actionTypes } from "../../utils/cosntant"

const initialState = {
    authenticated: false,
    user: null,
    isAuthenticating: false,
    message: "",
    error: ""
}

export const getProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_PENDING:
            state = {
                ...state,
                isAuthenticating: true,
                message: "Authenticating...",
            }
            return state
        case actionTypes.AUTH_FAILED:
            state = {
                ...state,
                isAuthenticating: true,
                message: "Authentication failed.. ",
            }
            return state
        case actionTypes.AUTH_SUCCESS:
            state = {
                ...state,
                isAuthenticating: true,
                message: "Authenticating...",
            }
            return state
    }
}