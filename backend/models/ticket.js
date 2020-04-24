const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  theatre: { type: mongoose.Types.ObjectId, required: true, ref: 'Cinemas' },
   movie: { type: mongoose.Types.ObjectId, required: true, ref: 'Movies'},
   creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
   showtime: { type: mongoose.Types.ObjectId, required: true, ref: 'Showtimes' },
});

module.exports = mongoose.model('Ticket', ticketSchema);