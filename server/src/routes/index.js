const express = require('express');
const route = express.Router();
const HashController = require("../controllers/Hash-Controller")

route.post('/hashtext' , HashController.create);

module.exports = route;