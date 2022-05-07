const express = require('express')
const keys = require('../config/keys')
const stripe = require('stripe')(keys.STRIPE_KEY)

const stripeRouter = express.Router()

stripeRouter.post('/payment', (req, res) => {
	stripe.charges.create({
		source: req.body.tokenId,
		amount: req.body.amount,
		currency: 'usd'
	}, (stripeError, stripeRes) => {
		if(stripeError) {
			res.status(500).json(stripeError) 
		} else{
			res.status(200).json(stripeRes) 
		}
	})
})


module.exports = stripeRouter