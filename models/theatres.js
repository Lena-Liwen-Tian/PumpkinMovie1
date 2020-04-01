const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CinemasSchema = new mongoose.Schema({}, {collection: "cinemas"});


const Cinemas = mongoose.model("Cinemas",CinemasSchema);

module.exports = Cinemas;