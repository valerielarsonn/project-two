// Grab environment variables
require("dotenv").config();

// IMPORT EXPRESS
const express = require("express");

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

//IMPORT MIDDLEWARE
const methodOverride = require("method-override");
const cors = require("cors");

// GET PORT FROM ENV OR DEFAULT PORT
const PORT = process.env.PORT || "2021";

/////////////////////////////////////
// Create Express Application Object
/////////////////////////////////////

const app = express();

/////////////////////////////////////
// Set the View Engine
/////////////////////////////////////
app.set("view engine", "ejs");

/////////////////////////////////////
// Setup Middleware
/////////////////////////////////////
app.use(cors()); // Prevent Cors Errors if building an API
app.use(methodOverride("_method")); // Swap method of requests with _method query
app.use(express.static("public")); // serve the public folder as static
app.use(express.json()); // Parse json bodies
app.use(express.urlencoded({ extended: false })); //parse bodies from form submissions

/////////////////////////////////////
// Routes and Routers
/////////////////////////////////////

//Mounting Routes


/////////////////////////////////////
// App Listener
/////////////////////////////////////
app.listen(3000, ()=> {
    console.log("listening");
})