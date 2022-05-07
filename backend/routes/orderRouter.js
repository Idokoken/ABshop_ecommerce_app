const express = require('express')
const Order = require('../models/orderModel')
const {verifyToken,verifyTokenAndAuth, verifyTokenAndAdmin} = require('./verifyToken')
const CryptoJS = require("crypto-js");
const keys = require('../config/keys')


const orderRouter = express.Router()
 
//create order
orderRouter.post('/', verifyToken, async(req, res) => {
	const newOrder = new Order(req.body)
	try{
		const order = await newOrder.save()
		res.status(200).json(order)
	} catch(err) {
		res.status(500).json(err)
	}
})

//update order
orderRouter.put('/:id',verifyTokenAndAuth, async(req, res) => {
	if(req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(req.body.password, keys.PASS_SEC).toString()
	}
	try{
		 const updatedorder = await order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
		 res.status(200).json(updatedorder)
	}catch(err) {
		res.status(500).json('error updating order')
	}
})
// delete order
orderRouter.delete('/:id',verifyTokenAndAuth, async(req, res) => {
	try{
		await order.findByIdAndDelete(req.params.id)
		 res.status(200).json('order deleted')
	}catch(err) {
		 res.status(500).json('error updating order')
	}
})

//get call
orderRouter.get('/find/:userId', verifyTokenAndAuth, async(req, res) => {
	try{
		const order = await order.findOne({userId: req.params.userId})
		res.status(200).json(order)
	} catch(err){
		res.status(500).json('you are not an admin')
	}
})

//get all order
orderRouter.get('/', verifyTokenAndAdmin, async(req, res) => {
	try{
		const orders = await order.find()
		res.status(200).json(orders)
	} catch(err){
		res.status(500).json('error')
	}
})

// get monthly stat
orderRouter.get('/income', verifyTokenAndAdmin, async(req, res) => {
	const date = new Date()
	const lastMonth = new Date(date.setMonth(date.getMonth() -1))
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1))
	try{
		const income = await Order.aggregate([
		{
			$match: {createdAt: {$gte: previousMonth}}
			},
		{
			$project: {month: {$month: '$createdAt'}, sales: '$amount'	}
			},
			{
				$group: {_id: '$month', total: {$sum: '$sales'}}
			}
		])
		res.status(200).json(income)
	}catch(err){
		res.status(500).json(err)
	}
})


module.exports = orderRouter	