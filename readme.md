# Learn - Node.js by building E-Commerce website
This repository is a beginner's guide to creating REST APIs using Node.js. It includes hands-on practice projects drawn from the following resources:
1. [Net Ninja's Node.js & API Tutorial Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8) 
2. [Udemy Course: NodeJs: Build The Complete E-Commerce Web API](https://www.udemy.com/course/nodejs-build-complete-ecommerce-web-api/)

This repository specifically focuses on the backend development of an e-commerce API.


## Instructions to run the application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - To run the project : `npm start`


## Application Flow
You can refere [this](/flow.md) for more information on the flow of the application.

### 1. Creating a Boilerplate
- Setup environment variables and middleware for functionality such as CORS, JSON parsing, logging HTTP requests with Morgan, and connecting to MongoDB with Mongoose.
- Organize models and routes in separate folders for better maintainability.

### 2. API Basics
- Understand mongoose schema types and options.
- Learn how to handle incoming data through request bodies, query parameters, and URL parameters.
- Implement APIs using either async/await or promises with query handling.
- Enhance schema accessibility on the frontend by using virtuals to modify schema properties.

### 3. E-Commerce Specifics
- **Products and Categories**: Define schemas and build CRUD APIs for managing products and categories, including advanced features like filtering and populating references.
- **Users**: Manage user data with secure password hashing, user authentication using JWTs, and role-based API access.
- **Orders**: Handle orders, integrate user references, manage order items, and calculate totals dynamically.

### 4. APIs and Endpoints
- Access the following CRUD operations through tools like Postman after starting your server: Create, read, update, and delete operations for products, users, categories, and orders.


## Technologies used
`express` `mongoose` `nodemon` `dotenv` `morgan` `cors` `bcryptjs` `jsonwebtoken` `express-jwt`