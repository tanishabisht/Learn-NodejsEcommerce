const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../Models/user.model')
require('dotenv').config()

router = express.Router()




// create new user : register
router.post(`/`, (req,res) => {
    let reqBody = { 
        name:req.body.name, 
        email:req.body.email, 
        passwordHash: bcrypt.hashSync(req.body.password,10),
        street:req.body.street,
        appartment:req.body.appartment,
        city:req.body.city,
        zip:req.body.zip,
        country:req.body.country,
        phone:req.body.phone,
        isAdmin:req.body.isAdmin
    }
    User.create(reqBody)
    .then(user => res.status(200).send({success:true, user:user, mssg:'User created'}))
    .catch(err => res.status(500).send({success:false, mssg:'User not created', err:err}))
})


// get all users
router.get(`/`, (req,res) => {
    User.find().select('-passwordHash')
    .then(userList => res.status(200).json({success:true, users:userList}))
    .catch(err => res.status(500).json({success:false, err:err}))
})


// login
router.get(`/login`, (req,res) => {
    User.findOne({email:req.body.email})
    .then(user => {
        if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
            const token = jwt.sign({userId:user.id, isAdmin:user.isAdmin}, process.env.JWT_AUTH_SECRETKEY, {expiresIn:'1d'})
            res.status(200).send({success:true, mssg:'User with specified email is returned successfully', token:token, user:user})
        }
        else res.status(200).send({success:true, user:user, mssg:'Incorrect username or password'})
    })
    .catch(err => res.status(500).json({success:false, mssg:'User not found', err:err}))
})


// get user by id
router.get(`/:id`, (req,res) => {
    User.findById(req.params.id).select('-passwordHash')
    .then(user => res.status(200).send({success:true, user:user, mssg:'User with specified id is returned successfully'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// get user count
router.get(`/get/count`, (req,res) => {
    User.find().countDocuments()
    .then(count => res.status(200).json({success:true, userCount:count}))
    .catch(err => res.status(500).json({success:false, err:err}))
})


// update user by id
router.put(`/:id`, (req,res) => {
    let reqBody = { 
        name:req.body.name, 
        email:req.body.email,
        street:req.body.street,
        appartment:req.body.appartment,
        city:req.body.city,
        zip:req.body.zip,
        country:req.body.country,
        phone:req.body.phone,
        isAdmin:req.body.isAdmin
    }
    User.findByIdAndUpdate(req.params.id, reqBody, {new:true})
    .then(user => res.status(200).send({success:true, user:user, mssg:'Your user is updated'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// patch user by id
router.patch(`/:id`, (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(user => res.status(200).send({success:true, user:user, mssg:'Your user is updated'}))
    .catch(err => res.status(500).json({success:false, mssg:err}))
})


// delete user by id
router.delete('/:id', (req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(user => {
        if(!user) res.status(404).json({success:false, mssg:'user id not found'})
        else res.status(201).json({success:true, user:user, mssg:'user is deleted'})
    })
    .catch(err => res.status(500).json({success:false, mssg:err}))
})






module.exports = router