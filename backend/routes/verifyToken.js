const keys = require('../config/keys')
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token
	if(authHeader) {
		const token = authHeader.split(' ')[1]
		jwt.verify(token, keys.JWT_SECRET, function(err, user) {
			if(err) res.status(403).json('invalid token')
  req.user = user
  next()
});
	} else{
		res.status(401).json('you are not authenticated')
	}
}

const verifyTokenAndAuth = (req, res, next) => {
	  verifyToken(req, res, () => {
	  	if(req.user.id === req.params.id || req.user.isAdmin) {
	  		next()
	  	} else {
	  		res.status(403).json('access denied')
	  	}
	  })
}

const verifyTokenAndAdmin = (req, res, next) => {
	  verifyToken(req, res, () => {
	  	if(req.user.isAdmin) {
	  		next()
	  	} else {
	  		res.status(403).json('access denied')
	  	}
	  })
}

module.exports = {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin}