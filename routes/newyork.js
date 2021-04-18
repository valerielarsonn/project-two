const express = require("express");
const router = express.Router();
const newyorkCtrl = require("../controllers/newyork");

router.get("/", newyorkCtrl.index);

router.get("/new", newyorkCtrl.newNewyork);

router.delete("/:id", newyorkCtrl.deleteNewyork);

router.put("/:id", newyorkCtrl.update);

router.post("/", newyorkCtrl.create);

router.get("/:id/edit", newyorkCtrl.edit);

router.get("/:id", newyorkCtrl.show);

module.exports = router;