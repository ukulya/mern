const {Schemz,model,Typed} = require('mongoose')

const schema = new Schema({
    from:{type:String,required: true},
    to:{type: String}
})