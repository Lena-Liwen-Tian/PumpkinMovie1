const axios = require("axios");
const HttpError = require("../models/http-error");

const API_KEY = process.env.GOOGLE_API_KEY;

//take the address and convert it to latitude
//asynchronous 
async function getCoordsForAddress(address){
   //send request to Google API 
   const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/xml?address=${encodeURIComponent(address)}&key=${API_KEY}`);

  const data = response.data;
  if(!data || data.status === 'ZERO_RESULTS') {
      const error = new HttpError("Could not find location for the specified address.",422);
      throw error;
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}

module.exports = getCoordsForAddress;