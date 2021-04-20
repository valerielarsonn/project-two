// require the Denver model
const Denver = require("../models/Denver");

//INDEX
const index = async (req, res)=>{
    Denver.find({}, (error, allDenvers)=>{
        res.render("denver/index.ejs", {
            denvers: allDenvers,
        });
    });
};

//NEW 
const newDenver = async (req, res)=>{
    res.render("denver/new");
};

//DELETE
const deleteDenver = async (req, res)=>{
    Denver.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect("/denver");
    });
};

//UPDATE
const update = async (req, res)=>{
    if(req.body.monthly === 'on'){
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Denver.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect("/denver");
    });
};

//CREATE
const create = async (req, res)=>{
    if(req.body.monthly === "on"){ 
        req.body.monthly = true;
    } else {
        req.body.monthly = false;
    }
    Denver.create(req.body, (error, createdDenver)=>{
        console.log(createdDenver);
        res.redirect("/denver");
    });
};

//EDIT
const edit = async (req, res)=>{
    Denver.findById(req.params.id, (err, foundDenver)=>{
        res.render(
    		"denver/edit.ejs",
    		{
    			denver: foundDenver 
    		}
    	);
    });
};

//SHOW
const show = async (req, res)=>{
    Denver.findById(req.params.id, (err, foundDenver)=>{
        res.render("denver/show.ejs", {
            denver: foundDenver
        });
    });
};

module.exports = {
    index,
    newDenver,
    deleteDenver,
    update,
    create,
    edit,
    show
};