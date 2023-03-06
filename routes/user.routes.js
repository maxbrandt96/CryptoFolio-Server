const express = require("express");
const router = express.Router();

// TODO: Import user controller to handle requests
const userController = require("../routes/user.controller");

router.get("/:id", userController.getUserById);

module.exports = router;
