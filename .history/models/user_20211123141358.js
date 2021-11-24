const {Schema,model} = require('mongoose');

const schema = new Schema({
    email: {type: String,required: true,unique: tr}
});

module.exports = model('User',schema)