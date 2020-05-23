const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const cors = require('cors');
const Casecustomer = db.Casecustomer;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username }) {
    const casecustomer = await Casecustomer.findOne({ username });
    if (casecustomer) {
        const token = jwt.sign({ sub: casecustomer.id }, config.secret);
        return {
            token
        };
    }
}

async function getAll() {
    return await Casecustomer.find().select('');
}

async function getById(id) {
    return await Casecustomer.findById(id).select('');
}

async function create(casecustomerParam) {
    // validate
    if (await Casecustomer.findOne({ username: casecustomerParam.username })) {
        throw 'Username "' + casecustomerParam.username + '" is already taken';
    }

    const casecustomer = new Casecustomer(casecustomerParam);
    // save user
    await casecustomer.save();
}

async function update(id, casecustomerParam,) {
    const casecustomer = await Casecustomer.findById(id);

    // validate
    if (!casecustomer) throw 'Case not found';
    if (casecustomer.username !== casecustomerParam.username && await Casecustomer.findOne({ username: casecustomerParam.username })) {
        throw 'Username "' + casecustomerParam.username + '" is already taken';
    }

  
    // copy userParam properties to user
    Object.assign(casecustomer, casecustomerParam);

    await casecustomer.save();
}

async function _delete(id) {
    await Casecustomer.findByIdAndRemove(id);
}