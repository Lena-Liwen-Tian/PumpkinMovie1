const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShowtimesSchema = new mongoose.Schema({}, {collection: "showtimesnew"});


const Showtimes = mongoose.model("Showtimes",ShowtimesSchema);

module.exports = Showtimes;
