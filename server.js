//Modules
const express = require("express");
const cors = require('cors');
//Server configuration
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const env = require("dotenv");
const socket = require('./socket');

//Environment
env.config({ path: "./config/local.env" });

// Router
const router = require("./network/routes");


//Database
const db = require("./network/db");
db();

// Data parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Route configuration
socket.connect(server);
router(app);

// Static files
app.use('/app', express.static('public'));

// Start server
server.listen(3000, () => {
  console.log("Server is listening in port 3000");
});
