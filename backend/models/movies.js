const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoviesSchema = new mongoose.Schema({}, {collection: "moviesnew"});


const Movies = mongoose.model("Movies",MoviesSchema);

module.exports = Movies;