import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/root.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store