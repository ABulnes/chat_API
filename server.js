
//Modules
const express = require('express');
const bodyParser = require('body-parser');
const env =require('dotenv')

//Environment
env.config({path:"./config/local.env"})

// Router
const router = require('./network/routes')

//Database
const db = require('./network/db');

//Server configuration
var app = express();

// Data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// Route configuration
router(app);



//Static files
// app.use('/app', express.static('public')); 

// Start server
app.listen(3000);

console.log('Server is listening in port 3000');