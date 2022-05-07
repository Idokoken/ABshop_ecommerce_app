const express = require('express')
const Cart = require('../models/cartModel')
const {verifyToken,verifyTokenAndAuth, verifyTokenAndAdmin} = require('./verifyToken')
const CryptoJS = require("crypto-js");
const keys = require('../config/keys')


const cartRouter = express.Router()
 
//create cart
cartRouter.post('/', verifyToken, async(req, res) => {
	const newCart = new Cart(req.body)
	try{
		const cart = await newCart.save()
		res.status(200).json(cart)
	} catch(err) {
		res.status(500).json(err)
	}
})

//update cart
cartRouter.put('/:id',verifyTokenAndAuth, async(req, res) => {
	if(req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(req.body.password, keys.PASS_SEC).toString()
	}
	try{
		 const updatedcart = await cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
		 res.status(200).json(updatedcart)
	}catch(err) {
		res.status(500).json('error updating cart')
	}
})
// delete cart
cartRouter.delete('/:id',verifyTokenAndAuth, async(req, res) => {
	try{
		await Cart.findByIdAndDelete(req.params.id)
		 res.status(200).json('cart deleted')
	}catch(err) {
		 res.status(500).json('error updating cart')
	}
})

//get call
cartRouter.get('/find/:userId', verifyTokenAndAuth, async(req, res) => {
	try{
		const cart = await Cart.findOne({userId: req.params.userId})
		res.status(200).json(cart)
	} catch(err){
		res.status(500).json('you are not an admin')
	}
})

//get all cart
cartRouter.get('/', verifyTokenAndAdmin, async(req, res) => {
	try{
			const carts = await Cart.find()
		res.status(200).json(carts)
	} catch(err){
		res.status(500).json('error')
	}
})

module.exports = cartRouter	