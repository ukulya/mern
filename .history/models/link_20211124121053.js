const {Schemz,model,Typed} = require('mongoose')

const schema = new Schema({
    from:{type:String,required: true},
    to:{type: String,required: true,unique: true},
    code:{type:String,required: true},
    date:{type: Date,default: Date.now},
    clicks:{type:Num}
})

module.exports = model('Link',schema)