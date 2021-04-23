const mongoose = require('mongoose')

// creating Schema
const productSchema = mongoose.Schema({
    name:String,
    image:String,
    countInStock:{
        type:Number,
        required:true
    }
})

// creating model for the schema
module.exports = Product = mongoose.model('Product', productSchema)