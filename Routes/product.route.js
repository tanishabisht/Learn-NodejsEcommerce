const express = require('express')
const Product = require('../Models/product.model')
const Category = require('../Models/category.model')

router = express.Router()





// create new product
router.post(`/`, (req,res) => {
    if(!Category.findById(req.body.category)) res.status(404).json({success:false, mssg:'category id not found'})
    let reqBody = { 
        name:req.body.name, 
        description:req.body.description, 
        richDescription:req.body.richDescription,
        image:req.body.image,
        images:req.body.images,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured,
        dateCreated:req.body.dateCreated,
    }
    Product.create(reqBody)
    .then(product => res.status(200).send({success:true, product:product, mssg:'Product created'}))
    .catch(err => res.status(500).send({success:false, mssg:'Product Not created', err:err}))
})


// get all products OR get products by category
router.get(`/`, (req,res) => {
    filter = {}
    if(req.query.categories) filter = {category:req.query.categories.split(',')}
    Product.find(filter).populate('category')
    .then(productList => res.status(200).json({success:true, products:productList}))
    .catch(err => res.status(500).json({success:false, err:err}))
})


// get all products and return some fields only
router.get(`/name_desc`, (req,res) => {
    Product.find().select('name description')
    .then(productList => res.status(200).json({success:true, products:productList}))
    .catch(err => res.status(500).json({success:false, err:err}))
})


// get product count
router.get(`/get/count`, (req,res) => {
    Product.find().countDocuments()
    .then(count => res.status(200).json({success:true, productCount:count}))
    .catch(err => res.status(500).json({success:false, err:err}))
})


// get top x featured products
router.get(`/get/featured/:count`, (req,res) => {
    let count = req.params.count ? req.params.count : 0
    Product.find().find({isFeatured:true}).limit(+count)
    .then(featuredProduct => res.status(200).json({success:true, featuredProducts:featuredProduct}))
    .catch(err => res.status(500).json({success:false, err:err}))
})


// get product by id
router.get(`/:id`, (req,res) => {
    Product.findById(req.params.id).populate('category')
    .then(product => res.status(200).send({success:true, product:product, mssg:'product with specified id is returned successfully'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// update product by id
router.put(`/:id`, (req,res) => {
    if(!Category.findById(req.body.category)) res.status(404).json({success:false, mssg:'category id not found'})
    let reqBody = { 
        name:req.body.name, 
        description:req.body.description, 
        richDescription:req.body.richDescription,
        image:req.body.image,
        images:req.body.images,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured,
        dateCreated:req.body.dateCreated,
    }
    Product.findByIdAndUpdate(req.params.id, reqBody, {new:true})
    .then(product => res.status(200).send({success:true, product:product, mssg:'Your product is updated'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// patch product by id
router.patch(`/:id`, (req,res) => {
    if(!Category.findById(req.body.category)) res.status(404).json({success:false, mssg:'category id not found'})
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(product => res.status(200).send({success:true, product:product, mssg:'Your product is updated'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// delete product by id
router.delete('/:id', (req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(product => {
        if(!product) res.status(404).json({success:false, mssg:'product id not found'})
        else res.status(201).json({success:true, product:product, mssg:'product is deleted'})
    })
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


module.exports = router