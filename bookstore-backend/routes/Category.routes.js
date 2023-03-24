const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/Catalog.controller");

router.get("/all", catalogController.getCategories);
router.post("/add", catalogController.addCategory);
router.delete("/delete/:id", catalogController.deleteCategoryById);

module.exports = router;
