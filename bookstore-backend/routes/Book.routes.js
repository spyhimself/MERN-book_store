const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/Catalog.controller");

router.get("/all", catalogController.getBooks);
router.post("/add", catalogController.addBook);
router.put("/update", catalogController.updateBook);
router.delete("/delete/:id", catalogController.deleteBookById);
router.get("/id/:id", catalogController.getBookById);
router.get("/name/:name", catalogController.getBookByName);

module.exports = router;