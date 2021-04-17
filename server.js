const Denver = require("./models/Denver.js")

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

//NEW DENVER REVIEW
app.get("/denver/review", (req, res)=>{
    res.send("received");
});


//INDEX DENVER
app.get("/denver", (req, res)=>{
    Denver.find({}, (error, allDenvers)=>{
        res.render("denver/index.ejs", {
            denvers: allDenvers,
        });
    });
});

//NEW DENVER
app.get("/denver/new", (req, res)=>{
    res.render("denver/new");
});

//CREATE DENVER
app.post("/denver/", (req, res)=>{
    if(req.body.readyToEat === "on"){ 
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Denver.create(req.body, (error, createdDenver)=>{
        console.log(createdDenver);
        res.redirect("/denver");
    });
});

//SHOW DENVER
app.get("/denver/:id", (req, res)=>{
    Denver.findById(req.params.id, (err, foundDenver)=>{
        res.render("denver/show.ejs", {
            denver: foundDenver
        });
    });
});


//Mounting Routes


/////////////////////////////////////
// App Listener
/////////////////////////////////////
app.listen(3000, ()=> {
    console.log("listening");
});