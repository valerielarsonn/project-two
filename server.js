const Denver = require("./models/Denver.js")

const denverRouter = require("./routes/denver"); 
const austinRouter = require("./routes/austin"); 
const newyorkRouter = require("./routes/newyork"); 


// Grab environment variables
require("dotenv").config();

// IMPORT EXPRESS
const express = require("express");

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

// IMPORT MERCED LOGGER
const { log } = require("mercedlogger");

//IMPORT MIDDLEWARE
const methodOverride = require("method-override");
const morgan = require("morgan");
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
app.use(morgan("tiny")); // Request Logging
app.use(express.json()); // Parse json bodies
app.use(express.urlencoded({extended:true})); //parse bodies from form submissions

/////////////////////////////////////
// Routes and Routers
/////////////////////////////////////

//NEW HOME
app.get("/", (req, res)=>{
    res.render("home.ejs");
});

//NEW WIP
app.get("/wip", (req, res)=>{
    res.render("wip.ejs");
});

//INDEX DENVER REVIEW
app.get("/denver/:id/reviews", (req, res)=>{
    Denver.create(req.body, (error, createdDenver)=>{
        console.log(createdDenver);
        res.redirect("/denver");
    });
});

//NEW DENVER REVIEW
app.get("/denver/:id/reviews/new", (req, res)=>{
    res.render("wip.ejs")
});

//CREATE DENVER REVIEW
app.post("/denver/:id/reviews", (req, res)=>{
    res.send(req.body);
});



//Mounting Routes
app.use("/denver", denverRouter);
app.use("/austin", austinRouter);
app.use("/newyork", newyorkRouter);

/////////////////////////////////////
// App Listener
/////////////////////////////////////
app.listen(PORT, ()=> {
    console.log("listening");
});
