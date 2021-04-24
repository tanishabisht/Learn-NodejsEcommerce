# Creating API in NODE JS

This repo is a beginner's guide to create Rest APIs in NodeJS. The content can be hands on practices from the following resources:
1. [Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8) : Link to the [repo](https://github.com/tanishabisht/APIs-NodeJS-Ninja)
2. [NodeJs: Build The Complete E-Commerce Web API](https://www.udemy.com/course/nodejs-build-complete-ecommerce-web-api/)

This is the repo for e-commerce API.


---


## Dependancies Used
- [`express`](https://www.npmjs.com/package/express) : Provides us with fewer lines of code for routing, caching and redirecting.
- [`nodemon`](https://www.npmjs.com/package/nodemon) : Automatically restarts the server when file-changes in the directory are detected
- [`dotenv`](https://www.npmjs.com/package/dotenv) : to access environment variables
- [`morgan`](https://www.npmjs.com/package/morgan) : to log the http requests comming from the front-end
- [`mongoose`](https://www.npmjs.com/package/mongoose) : helps connect mongoDB with our nodejs application
- [`cors`](https://www.npmjs.com/package/cors) : to allow cross platform access to the APIs
- [`bcryptjs`](https://www.npmjs.com/package/bcryptjs) : to hash passwords
- [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) : to generate jwt for authentication of APIs, so that no APIs will work until the token is provided
- [`express-jwt`](https://www.npmjs.com/package/express-jwt) : to authenticate individual APIs using the jwt token generated during login


---


## Flow of the Applicaiton

### 1. Creating a Boilerplate
- `environment variables` : to access variables throughout the project
- `middlewares` : Set of functions to be performed on request body, and will return the response body.
- `cors()` : enable cors
- `express.json()` : to accept json data from the request body. Before [body-parser](https://www.npmjs.com/package/body-parser) was used
- `morgan('tiny')` : to log the http requests comming from the front-end
- `mongoose.connect(...)` : to connect to mongoDB
- `mongoose.Schema()` : create Schema
- `mongoose.Model()` : create Model
- `router.use()` : create routes and add functionalities
- Segregate Models and Routes in seperate folders and import in app.js



### 2. Basics to know before creating APIs

- Refer mongoose documentation for [Schema Type](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype) and [Schema Options](https://mongoosejs.com/docs/schematypes.html#schematype-options). 

- We get information from the front end from:
  1. Request body
  2. Query parameters
  3. URL parameters

- Fill in appropriate status codes, refer [this](https://www.restapitutorial.com/httpstatuscodes.html)

- We can create APIs by either of the two methods:
  1. Using async await
  2. Using Queries and Promises ( then ... catch )

- use virtuals to make it more frontend friendly : convert _id to id



### 3. Products and Categories

- `Create Product Schema` : { name, description, richDescription, image, images, brand, price, `category`, countInStock, rating, numReviews, isFeatured, dateCreated }
- `Create Category Schema` : { name, color, icon, image }
- `Category APIs`
  - `POST` : Add a Category : create()
  - `GET` : Find all Categories : find()
  - `GET` : Find Category by id : findById()
  - `PUT` : Update a Category : findByIdAndUpdate()
  - `PATCH` : Update a section of Category by Id : findByIdAndUpdate()
  - `DELETE` : Remove a Category : findByIdAndDelete()
- `Product APIs`
  - `POST` : Add a Product : create()
  - `GET` : Find all Products : find()
  - `GET` : Display certain fields of the product : `find().select('fieldName')`
  - `GET` : Find Product by id : findById()
  - If value of a field is an id that is linked to another table : `find().populate('fieldName')`
  - `PUT` : Update a Product : findByIdAndUpdate()
  - `PATCH` : Update a section of Product by Id : findByIdAndUpdate()
  - `DELETE` : Remove a Product : findByIdAndDelete()
  - `GET` : Get product count : `countDocuments(count => count)`
  - `GET` : Filter and get products by category : `find({category=...})`



### 4. User
- `Create User Schema` : { name, email, passwordHash, street, appartment, city, zip, country, phone, isAdmin }
- `User APIs`
  - `POST` : Add a new user : create()
  - `GET` : Find all users : find()
  - `GET` : Find user by id : findById()
  - Hashing pasword
    - bcrypt.hashSync(<password>,<salt>)
    - bcrypt.compareSync(<newPass>,<oldPass>)
  - To authenticate all APIs (express-jwt)
    - [jwt-decoder](https://jwt.io/)
    - Authenticate admin : `isRevoked`
  - `GET` : to login a user and get a jwt token
  - `PUT` : Update a user : findByIdAndUpdate()
  - `PATCH` : Update a section of user by Id : findByIdAndUpdate()
  - `DELETE` : Remove a user : findByIdAndDelete()



### 5. Order
- `Create Order Schema` : { `orderItems`, shippingAddress1, shippingAddress2, city, zip, country, phone, status, totalPrice, `user`, dateOrdered }


---


## CRUD APIs Created
After running the application in cammand line, the following routes can be accessed through POSTMAN


---


## How to start the application
1. PREREQUISITES : Node should be installed
2. `npm install` : to install all the dependancies from package.json
3. `npm run start` : to start the server