const {Schema,model} = require('mongoose');

const schema = new Schema({
    email: {type: String,req}
});

module.exports = model('User',schema)