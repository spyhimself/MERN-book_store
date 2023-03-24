const express = require("express");
const router = express.Router();
const userController = require("../controllers/User.controller");

router.get("/all", userController.getUsers);
router.post("/add", userController.addUser);

module.exports = router;
