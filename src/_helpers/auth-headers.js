export function authHeaders() {
    // return authorization header with jwt token
    let casecustomer = JSON.parse(localStorage.getItem('casecustomer'));

    if (casecustomer && casecustomer.token) {
        return { 'Authorization': 'Bearer ' + casecustomer.token };
    } else {
        return {};
    }
}

