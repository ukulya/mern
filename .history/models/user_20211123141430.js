const {Schema,model} = require('mongoose');

const schema = new Schema({
    email: {type: String,required: true,unique: true},
    email: {type: String,required: true},
});

module.exports = model('User',schema)