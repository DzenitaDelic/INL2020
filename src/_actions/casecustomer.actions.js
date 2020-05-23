import { casecustomerConstants } from '../_constants';
import { casecustomerService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const casecustomerActions = {
    register,
    getAll,
    delete: _delete
};


function register(casecustomer) {
    return dispatch => {
        dispatch(request(casecustomer));

        casecustomerService.register(casecustomer)
            .then(
                casecustomer => { 
                    dispatch(success());
                    history.push('/home');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(casecustomer) { return { type: casecustomerConstants.REGISTER_REQUEST, casecustomer } }
    function success(casecustomer) { return { type: casecustomerConstants.REGISTER_SUCCESS, casecustomer } }
    function failure(error) { return { type: casecustomerConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        casecustomerService.getAll()
            .then(
                casecustomers => dispatch(success(casecustomers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: casecustomerConstants.GETALL_REQUEST } }
    function success(casecustomers) { return { type: casecustomerConstants.GETALL_SUCCESS, casecustomers } }
    function failure(error) { return { type: casecustomerConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        casecustomerService.delete(id)
            .then(
                casecustomer => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: casecustomerConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: casecustomerConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: casecustomerConstants.DELETE_FAILURE, id, error } }
}