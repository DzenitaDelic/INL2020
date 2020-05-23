const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const cors = require('cors');
const Customer = db.Customer;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username }) {
    const customer = await Customer.findOne({ username });
    if (customer) {
        const token = jwt.sign({ sub: customer.id }, config.secret);
        return {
            token
        };
    }
}

async function getAll() {
    return await Customer.find().select('');
}

async function getById(id) {
    return await Customer.findById(id).select('');
}

async function create(customerParam) {
    // validate
    if (await Customer.findOne({ username: customerParam.username })) {
        throw 'Username "' + customerParam.username + '" is already taken';
    }

    const customer = new Customer(customerParam);
    // save user
    await customer.save();
}

async function update(id, customerParam,) {
    const customer = await Customer.findById(id);

    // validate
    if (!customer) throw 'Customer not found';
    if (customer.username !== customerParam.username && await Customer.findOne({ username: customerParam.username })) {
        throw 'Username "' + customerParam.username + '" is already taken';
    }

  
    // copy userParam properties to user
    Object.assign(customer, customerParam);

    await customer.save();
}

async function _delete(id) {
    await Customer.findByIdAndRemove(id);
}