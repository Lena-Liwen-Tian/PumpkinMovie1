const uuid = require('uuid/v4');
const HttpError = require("../models/http-error");
const{validationResult} = require("express-validator");
const mongoose = require("mongoose");
const Showtimes = require("../models/showtimes")



const getShowtimesByTime = async(req,res,next)=>{
    let showtimesId = req.params.timeid;

    try{
      
        showtimes = await Showtimes.find({"date": showtimesId});
    }catch (err) {
        const error = new HttpError("Somthing went wrong, could not find the movie shown at this time",500);
        return next(error);
    }
    if(!showtimes){
        const error = new HttpError(
         "No movie shown at this time.",404
        );
        return next(error);
    }
    res.json({showtimes:showtimes.map(showtime=>showtime.toObject({getters:true}))});

};

exports.getShowtimesByTime = getShowtimesByTime;