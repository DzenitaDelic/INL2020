import { FETCH_CASECUSTOMERS, NEW_CASECUSTOMER } from '../_actions/types';

const initialState = {
    casecustomers: [],
    casecustomer: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CASECUSTOMERS:
            return {
                ...state,
                casecustomers: action.payload
            }

        case NEW_CASECUSTOMER:
            return {
                ...state,
                casecustomer: action.payload
            }

        default:
            return state
    }
}