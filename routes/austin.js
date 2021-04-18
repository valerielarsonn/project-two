const express = require("express");
const router = express.Router();
const austinCtrl = require("../controllers/austin");

router.get("/", austinCtrl.index);

router.get("/new", austinCtrl.newAustin);

router.delete("/:id", austinCtrl.deleteAustin);

router.put("/:id", austinCtrl.update);

router.post("/", austinCtrl.create);

router.get("/:id/edit", austinCtrl.edit);

router.get("/:id", austinCtrl.show);

module.exports = router;