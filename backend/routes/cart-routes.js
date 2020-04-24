const express = require("express");
const cartControllers = require("../controllers/cart-controller");
const router = express.Router();

router.post('/',cartControllers.getPrice);
module.exports = router;