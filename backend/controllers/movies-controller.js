const uuid = require('uuid/v4');
const HttpError = require("../models/http-error");
const{validationResult} = require("express-validator");
const mongoose = require("mongoose");
const Movies = require("../models/movies");
const Showtimes = require("../models/showtimes");

const getMovies = async(req,res,next)=>{
    
    try{      
        movies = await Movies.find({});
    }catch (err) {
        const error = new HttpError("Somthing went wrong, could not find the movie",500);
        return next(error);
    }
    if(!movies){
        const error = new HttpError(
         "No movie.",404
        );
        return next(error);
    }
    res.json(200,{movies:movies.map(movie=>movie.toObject({getters:true}))});

};
const getMovieById = async(req,res,next)=>{
    let movieid = req.params.movieid;
    try{
        movie = await Movies.find({"imdbID":movieid});
    }catch(err) {
        const error = new HttpError("Somthing went wrong, could not find this movie",500);
        return next(error);
    }
    if(!movie){
        const error = new HttpError(
         "No movie.",404
        );
        return next(error);
    }try{    
        result = [];
        const name = movie[0].get("imdbID");
        const showtimes = await Showtimes.find({});     
        for(var i = 0; i < showtimes.length;i++){
            var data = showtimes[i].get("imdbID");          
           if(name === data){
            result.push(showtimes[i]);
           }
            
        }
       
    }
    catch (err) {
        const error = new HttpError("Somthing went wrong, could not find this theatre",500);
        return next(error);
} 
    res.json(200,{movie:movie[0].toObject({getters:true}),showtimes:result.map(r=>r.toObject({getters:true}))});
};

exports.getMovies = getMovies;
exports.getMovieById = getMovieById;