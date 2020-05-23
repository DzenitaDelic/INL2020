import { casecustomerConstants } from '../_constants';

export function casecustomers(state = {}, action) {
  switch (action.type) {
    case casecustomerConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case casecustomerConstants.GETALL_SUCCESS:
      return {
        items: action.casecustomers
      };
    case casecustomerConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case casecustomerConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(casecustomer =>
          casecustomer.id === action.id
            ? { ...casecustomer, deleting: true }
            : casecustomer
        )
      };
    case casecustomerConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(casecustomer => casecustomer.id !== action.id)
      };
    case casecustomerConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(casecustomer => {
          if (casecustomer.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...casecustomerCopy } = casecustomer;
            // return copy of user with 'deleteError:[error]' property
            return { ...casecustomerCopy, deleteError: action.error };
          }

          return casecustomer;
        })
      };
    default:
      return state
  }
}