const express = require("express")
const chalk = require("chalk")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')
const session = require('express-session')
const keys = require('./config/keys')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const productRouter = require('./routes/productRouter')
const cartRouter = require('./routes/cartRouter')
const orderRouter = require('./routes/orderRouter')
const stripeRouter = require('./routes/stripeRouter')


const app = express()
const port = process.env.PORT || 8080

//middleware setup
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
	secret: 'blog',
	resave: true,
	saveUninitialized: true
}))


//database setup
mongoose.connect(keys.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
const db = mongoose.connection
db.on('error', () => console.log('error connecting to database'))
db.once('open', () => console.log('connected to ABshop ' + chalk.magenta('database')))

//routes setup
app.get('/', (req, res) => {
	res.send('hello')
})
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)
app.use('/api/stripe', stripeRouter)

app.listen(port, ()=> console.log('listening on port ' + chalk.magenta(8080)))