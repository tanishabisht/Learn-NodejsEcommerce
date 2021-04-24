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

// creating model for the schema
module.exports = Category = mongoose.model('category', categorySchema)