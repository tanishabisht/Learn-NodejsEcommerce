# Creating API in NODE JS

This repo is a beginner's guide to create Rest APIs in NodeJS. The content can be hands on practices from the following resources:
1. [Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8) : Link to the [repo](https://github.com/tanishabisht/APIs-NodeJS-Ninja)
2. [NodeJs: Build The Complete E-Commerce Web API](https://www.udemy.com/course/nodejs-build-complete-ecommerce-web-api/)

This is the repo for e-commerce API.


## Dependancies Used
- `express` : Provides us with fewer lines of code for routing, caching and redirecting.
- `nodemon` : Automatically restarts the server when file-changes in the directory are detected
- `dotenv` : to access environment variables
- [`morgan`](https://www.npmjs.com/package/morgan) : to log the http requests comming from the front-end
- `mongoose ` : helps connect mongoDB with our nodejs application
- `cors` : to allow cross platform access to the APIs


## Flow of the Applicaiton
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



## CRUD APIs Created
After running the application in cammand line, the following routes can be accessed through POSTMAN


## How to start the application
1. PREREQUISITES : Node should be installed
2. `npm install` : to install all the dependancies from package.json
3. `npm run start` : to start the server