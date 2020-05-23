import { combineReducers } from 'redux'
import customersReducer from './customers.reducer'
import casecustomersReducer from './casecustomers.reducer'

export default combineReducers({
    customers: customersReducer,
    casecustomers: casecustomersReducer
})