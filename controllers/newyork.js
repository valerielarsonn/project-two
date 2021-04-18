// require the Denver model
const Newyork = require("../models/NewYork");

//INDEX
const index = async (req, res)=>{
    Newyork.find({}, (error, allNewyorks)=>{
        res.render("newyork/index.ejs", {
            newyorks: allNewyorks,
        });
    });
};

//NEW 
const newNewyork = async (req, res)=>{
    res.render("newyork/new");
};

//DELETE
const deleteNewyork = async (req, res)=>{
    Newyork.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect("/newyork");
    });
};

//UPDATE
const update = async (req, res)=>{
    if(req.body.monthly === 'on'){
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Newyork.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect("/newyork");
    });
};

//CREATE
const create = async (req, res)=>{
    if(req.body.monthly === "on"){ 
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Newyork.create(req.body, (error, createdNewyork)=>{
        console.log(createdNewyork);
        res.redirect("/newyork");
    });
};

//EDIT
const edit = async (req, res)=>{
    Newyork.findById(req.params.id, (err, foundNewyork)=>{
        res.render(
    		"newyork/edit.ejs",
    		{
    			newyork: foundNewyork
    		}
    	);
    });
};

//SHOW
const show = async (req, res)=>{
    Newyork.findById(req.params.id, (err, foundNewyork)=>{
        res.render("newyork/show.ejs", {
            newyork: foundNewyork
        });
    });
};

module.exports = {
    index,
    newNewyork,
    deleteNewyork,
    update,
    create,
    edit,
    show
};