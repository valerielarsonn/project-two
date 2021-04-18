const express = require("express");
const router = express.Router();
const denverCtrl = require("../controllers/denver");

router.get("/", denverCtrl.index);

router.get("/new", denverCtrl.newDenver);

router.delete("/:id", denverCtrl.deleteDenver);

router.put("/:id", denverCtrl.update);

router.post("/", denverCtrl.create);

router.get("/:id/edit", denverCtrl.edit);

router.get("/:id", denverCtrl.show);

module.exports = router;



