const mongoose = require('mongoose')

// creating Schema
const orderSchema = mongoose.Schema({
    orderItems: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
    },
    shippingAddress1: {
        type:String,
        required:true
    },
    shippingAddress2: {
        type:String,
        default:''
    },
    city: {
        type:String,
        required:true
    },
    zip: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    totalPrice: {
        type:Number,
        required:true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    dateOrdered:{
        type:Date,
        default:Date.now
    }    
})

// creating model for the schema
module.exports = Order = mongoose.model('order', orderSchema)