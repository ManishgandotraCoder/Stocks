import { combineReducers } from 'redux'
import cryptoReducers from './crypto.reducers'
import userReducers from './user.reducers'

const rootReducer = combineReducers({
    crypto : cryptoReducers,
    user: userReducers
});

export default rootReducer;