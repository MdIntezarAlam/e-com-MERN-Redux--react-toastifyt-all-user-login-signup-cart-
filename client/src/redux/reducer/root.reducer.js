
import { combineReducers } from 'redux'
import { getProductReducer } from './product.reducer'

const rootReducer = combineReducers({
    getProductReducer,
})
export default rootReducer