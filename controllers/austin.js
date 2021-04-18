// require the Denver model
const Austin = require("../models/Austin");

//INDEX
const index = async (req, res)=>{
    Austin.find({}, (error, allAustins)=>{
        res.render("austin/index.ejs", {
            austins: allAustins,
        });
    });
};

//NEW 
const newAustin = async (req, res)=>{
    res.render("austin/new");
};

//DELETE
const deleteAustin = async (req, res)=>{
    Austin.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect("/austin");
    });
};

//UPDATE
const update = async (req, res)=>{
    if(req.body.monthly === 'on'){
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Austin.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect("/austin");
    });
};

//CREATE
const create = async (req, res)=>{
    if(req.body.monthly === "on"){ 
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Austin.create(req.body, (error, createdAustin)=>{
        console.log(createdAustin);
        res.redirect("/austin");
    });
};

//EDIT
const edit = async (req, res)=>{
    Austin.findById(req.params.id, (err, foundAustin)=>{
        res.render(
    		"austin/edit.ejs",
    		{
    			austin: foundAustin 
    		}
    	);
    });
};

//SHOW
const show = async (req, res)=>{
    Austin.findById(req.params.id, (err, foundAustin)=>{
        res.render("austin/show.ejs", {
            austin: foundAustin
        });
    });
};

module.exports = {
    index,
    newAustin,
    deleteAustin,
    update,
    create,
    edit,
    show
};