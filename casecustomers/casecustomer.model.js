const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
   caseName: { type: String, required: true },
    caseInfo: { type: String, required: true },  
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Casecustomer', schema);
