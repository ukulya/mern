const {Schema,model} = require('mongoose');

const schema = new Schema({
    email: {type: string}
});

module.exports = model('User',schema)