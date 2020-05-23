const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');
const customerService = require('../customers/customer.service');
const casecustomerService = require('../casecustomers/casecustomer.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/update',
            '/users/register',
            '/customers/register',
            '/customers/authanticate',
            '/customers',
            '/customers/fetch',
            '/users/fetch',
            '/casecustomers/fetch',
            '/casecustomers/register',
            '/casecustomers/authanticate',
            '/casecustomers',

            
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
const customer = await customerService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!customer) {
        return done(null, true);
    }

    done();
    const casecustomer = await casecustomerService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!casecustomer) {
        return done(null, true);
    }

    done();
};
