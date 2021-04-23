const express = require('express')
const Product = require('../Models/product.model')

router = express.Router()



router.get(`/`, async (req,res) => {
    const productList = await Product.find()
    if(!productList) res.status(500).json({success:false})
    else res.send(productList)
})

router.post(`/`, (req,res) => {
    const newProd = new Product({
        name:req.body.name,
        image:req.body.image,
        countInStock:req.body.countInStock
    })
    newProd.save()
        .then(createdProd => res.status(201).json(newProd))
        .catch(err => res.status(500).json({sucess:false, err:err}))
})



module.exports = router