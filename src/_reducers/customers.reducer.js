import { customerConstants } from '../_constants';

export function customers(state = {}, action) {
  switch (action.type) {
    case customerConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case customerConstants.GETALL_SUCCESS:
      return {
        items: action.customers
      };
    case customerConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case customerConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(customer =>
          customer.id === action.id
            ? { ...customer, deleting: true }
            : customer
        )
      };
    case customerConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(customer => customer.id !== action.id)
      };
    case customerConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(customer => {
          if (customer.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...customerCopy } = customer;
            // return copy of user with 'deleteError:[error]' property
            return { ...customerCopy, deleteError: action.error };
          }

          return customer;
        })
      };
    default:
      return state
  }
}