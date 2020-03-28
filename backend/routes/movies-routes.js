const express = require("express");
const { check } = require("express-validator");
const moviesControllers = require("../controllers/movies-controller");

const router = express.Router();

router.get('/',moviesControllers.getMovies);
router.get('/:movieid',moviesControllers.getMovieById)


module.exports = router;