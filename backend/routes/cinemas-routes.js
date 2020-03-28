const express = require("express");
const { check } = require("express-validator");
const cinemasControllers = require("../controllers/cinema-controller");

const router = express.Router();

router.get('/',cinemasControllers.getCinemas);
router.get('/:cinemaid',cinemasControllers.getCinemaById);


module.exports = router;