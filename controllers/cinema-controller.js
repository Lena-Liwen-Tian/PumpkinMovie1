const HttpError = require("../models/http-error");
const{validationResult} = require("express-validator");
const mongoose = require("mongoose");
const Cinemas= require("../models/theatres")
const Showtimes = require("../models/showtimes");
const stringSimilarity = require('string-similarity');
const Promise = require('promise');
 
const getCinemas = async(req,res,next)=>{  
    try{      
       cinemas = await Cinemas.find({});
    }catch (err) {
        const error = new HttpError("Somthing went wrong, could not find the movie",500);
        return next(error);
    }
    if(!cinemas){
        const error = new HttpError(
         "No movie.",404
        );
        return next(error);
    }
    res.json({cinemas:cinemas.map(cinema=>cinema.toObject({getters:true}))});

};

const getCinemaById = async(req,res,next)=>{

    let cinemaid = req.params.cinemaid;
    try{          
       cinema = await Cinemas.find({"cinema_id":parseInt(cinemaid, 10)});
    } catch(err) {
        const error = new HttpError("Somthing went wrong, could not find this theatre",500);
        return next(error);
    }
    if(!cinema){
        const error = new HttpError(
         "No movie.",404
        );
        return next(error);
    }
        
        try{    
            result = [];
            const name = cinema[0].get("cinema_name");
            const movies = await Showtimes.find({});     
            for(var i = 0; i < movies.length;i++){
                var data = movies[i].get("theatre");
                var data1 = data.name;                         
               var similar = stringSimilarity.compareTwoStrings(name,data1);
               if(similar > 0.5){
                result.push(movies[i]);
               }
                
            }
           
        }
        catch (err) {
            const error = new HttpError("Somthing went wrong, could not find this theatre",500);
            return next(error);
    } 
    res.json({cinema:cinema[0].toObject({getters:true}),movies:result.map(r=>r.toObject({getters:true}))});
                
    

    
    
};

exports.getCinemas= getCinemas;
exports.getCinemaById = getCinemaById;



