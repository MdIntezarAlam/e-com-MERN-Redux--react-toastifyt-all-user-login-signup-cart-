
import { combineReducers } from 'redux'
import { getProductReducer } from './product.reducer'
import {userReducer} from './user.reducer'

const rootReducer = combineReducers({
    getProductReducer,
    userReducer
})
export default rootReducer