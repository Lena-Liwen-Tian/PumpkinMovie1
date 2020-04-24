"use strict";
// NPM install mongoose and chai. Make sure mocha is globally
// installed
const mongoose = require('mongoose');
const Cinemas = require("../theatres");
const Showtimes = require("../showtimes");
const Movies = require("../movies");

const chai = require('chai');
const expect = chai.expect;
// Create a new schema that accepts a 'name' object.
// 'name' is a required field

describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    mongoose.connect("mongodb+srv://LenaTian:TLWtlw940418@cluster0-fffyf.mongodb.net/test?retryWrites=true&w=majority");
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Test Database', function() {
    //Save object with 'name' value of 'Mike" 
      it('Should retrieve cinema data from test database', function(done) {
        //Look up the 'Mike' object previously saved.
        Cinemas.find({cinema_id: 10662}, (err, name) => {
          if(err) {throw err;}
          if(name.length === 0) {throw new Error('No data!');}
          done();
        });
      });
 
    it('Should retrieve showtimes data from test database', function(done) {
          //Look up the 'Mike' object previously saved.
           Showtimes.find({date:"2020-03-25"}, (err, name) => {
            if(err) {throw err;}
            if(name.length === 0) {throw new Error('No data!');}
            done();
          });
        });
    
    it('Should retrieve movies data from test database', function(done) {
        //Look up the 'Mike' object previously saved.
         Movies.find({Year:"2017"}, (err, name) => {
          if(err) {throw err;}
          if(name.length === 0) {throw new Error('No data!');}
          done();
        });
      });
      
     
        //Look up the 'Mike' object previously saved.
         
      
  });
    
    //After all tests are finis
  //After all tests are finished drop database and close connection
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});