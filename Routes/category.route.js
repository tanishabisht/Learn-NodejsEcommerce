const express = require('express')
const Category = require('../Models/category.model')

router = express.Router()


// create new category
router.post(`/`, (req,res) => {
    let reqBody = { name:req.body.name, color:req.body.color, icon:req.body.icon }
    Category.create(reqBody)
    .then(category => res.status(200).send({success:true, category:category, mssg:'Category created'}))
    .catch(err => res.status(500).send({success:false, mssg:'Category Not Found'}))
})


// get all categories
router.get(`/`, async (req,res) => {
    const categoryList = await Category.find()
    if(!categoryList) res.status(500).json({success:false})
    else res.status(200).send(categoryList)    
})


// get category by id
router.get(`/:id`, (req,res) => {
    Category.findById(req.params.id)
    .then(category => res.status(200).send({success:true, category:category}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// update category by id
router.put(`/:id`, (req,res) => {
    let reqBody = { name:req.body.name, color:req.body.color, icon:req.body.icon }
    Category.findByIdAndUpdate(req.params.id, reqBody, {new:true})
    .then(category => res.status(200).send({success:true, category:category, mssg:'Your category is updated'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// patch category by id
router.patch(`/:id`, (req,res) => {
    Category.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(category => res.status(200).send({success:true, category:category, mssg:'Your category is updated'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// delete category by id
router.delete('/:id', (req,res) => {
    Category.findByIdAndDelete(req.params.id)
    .then(category => {
        if(!category) res.status(404).json({success:false, mssg:'category id not found'})
        else res.status(201).json({success:true, category:category, mssg:'category is deleted'})
    })
    .catch(err => res.status(500).json({success:false, mssg:err}))
})

module.exports = router