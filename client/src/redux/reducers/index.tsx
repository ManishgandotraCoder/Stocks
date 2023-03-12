import { combineReducers } from 'redux'
import crypto from './crypto.reducers'

const rootReducer = combineReducers({
    crypto : crypto
});

export default rootReducer;