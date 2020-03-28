const express = require("express");
const { check } = require("express-validator");
const showtimesControllers = require("../controllers/showtimes-controller");

const router = express.Router();

router.get('/:timeid',showtimesControllers.getShowtimesByTime);




module.exports = router;