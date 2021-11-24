const {Schema,model} = require('mongoose');

const schema = new Schema({
    email: {type: String,required: true,unique}
});

module.exports = model('User',schema)