const mongoose = require('mongoose')

// creating Schema
const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
    },
    icon:{
        type:String,
    }
})

categorySchema.virtual('id').get(function(){
    return this._id.toHexString()
})

categorySchema.set('toJSON', {
    virtuals: true
})

// creating model for the schema
module.exports = Category = mongoose.model('category', categorySchema)