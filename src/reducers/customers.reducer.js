import { FETCH_CUSTOMERS, NEW_CUSTOMER } from '../_actions/types';

const initialState = {
    customers: [],
    customer: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            }

        case NEW_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            }

        default:
            return state
    }
}