import {createStore, combineReduceer, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import userInfo from './Reducers/userInfo'


const reducers = combineReducers({
    //REDUCERS ADD

    userInfo : userInfo
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;