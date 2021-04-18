const express = require("express");
const router = express.Router();
const denverCtrl = require("../controllers/denver");

router.get("/denver", denverCtrl.index);

router.get("/denver/new", denverCtrl.newDenver);

router.delete("/denver/:id", denverCtrl.deleteDenver);

router.put("/denver/:id", denverCtrl.update);

router.post("/denver", denverCtrl.create);

router.get("/denver/:id/edit", denverCtrl.edit);

router.get("/denver/:id", denverCtrl.show);

module.exports = router;



