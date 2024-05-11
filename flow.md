# Flow of the Applicaiton

## 1. Creating a Boilerplate
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



## 2. Basics to know before creating APIs

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



## 3. Products and Categories

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



## 4. User
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



## 5. Order
- `Create Order Schema` : { `orderItems`, shippingAddress1, shippingAddress2, city, zip, country, phone, status, totalPrice, `user`, dateOrdered }