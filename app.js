const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

// importing environment variables
require('dotenv').config()
const api = process.env.API_URL

// importing custom routes
const productRoutes = require('./Routes/product.route')
const categoryRoutes = require('./Routes/category.route')
const orderRoutes = require('./Routes/order.route')
const userRoutes = require('./Routes/user.route')

// importing helper functions
const authJwt = require('./Helpers/jwt')
const errorHandler = require('./Helpers/errorHandler')




// creating express instance
const app = express()




// MIDDLEWARES

// to enable CORS
app.use(cors())
app.options('*', cors())

// to access request body given in json format
app.use(express.json())

// to log requests comming from front-end
app.use(morgan('tiny'))

// to authenticate all APIs using JWT token
app.use(authJwt())

// to handle errors
app.use(errorHandler)



// ROUTES 
app.use(`${api}/products`, productRoutes)
app.use(`${api}/category`, categoryRoutes)
app.use(`${api}/order`, orderRoutes)
app.use(`${api}/user`, userRoutes)




// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING_DB, {useUnifiedTopology: true, useNewUrlParser: true})
.then(res => console.log('connection with the mongodB sucessfull...'))
.catch(err => console.log(err))




// Listen to the port
app.listen(3000, () => {
    console.log('listening to the server at http://localhost:3000/ .....')
})