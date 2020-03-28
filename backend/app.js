const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const showtimesRoutes = require('./routes/showtimes-routes');
const HttpError = require('./models/http-error');
const moviesRoutes = require('./routes/movies-routes');
const cinemasRoutes = require('./routes/cinemas-routes');
const app = express();
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/api/showtimes',showtimesRoutes);
app.use('/api/movies',moviesRoutes);
app.use('/api/theatres',cinemasRoutes);

//the midware only runs when the route cannot be found
app.use((req,res,next)=>{
    const error = new HttpError("Could not find this route",404);
    return next(error);
});

app.use((error,req,res,next) =>{
    //if respond has already sent
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
})


mongoose
  .connect(
    `mongodb+srv://LenaTian:TLWtlw940418@cluster0-fffyf.mongodb.net/pumpkinmovie?retryWrites=true&w=majority`,{useNewUrlParser: true}
  )
  .then(() => {
   
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });


