process.env.NODE_ENV = 'test';
const sinon = require("sinon");
const base = process.env.PWD;
const mongoose = require('mongoose'),
    testUtils = require(base + '/test/utils'),
   
should = require('should');
const cinemasControllers = require("../cinema-controller");
const getCinemas = cinemasControllers.getCinemas;
const getCinemaById = cinemasControllers.getCinemaById;
const movieControllers = require("../movies-controller");
const getMovies = movieControllers.getMovies;
const getMovieById = movieControllers.getMovieById;
const showtimesControllers = require("../showtimes-controller");
const getShowtimesByTime = showtimesControllers.getShowtimesByTime;
const HttpError = require("../../models/http-error");
const Cinemas = require("../../models/theatres");

const Showtimes = require("../../models/showtimes");
const stringSimilarity = require('string-similarity');
const Promise = require('promise');

const chaiHttp = require("../../node_modules/chai-http");
const expect  = require('chai').expect;
const request = require('../../node_modules/request');
const chai = require("chai");
chai.use(chaiHttp);
const app = require("../../app");


describe("connect to mongoose",()=>{  

    before((done)=>{
        mongoose.connect(`mongodb+srv://LenaTian:TLWtlw940418@cluster0-fffyf.mongodb.net/test?retryWrites=true&w=majority`,{useNewUrlParser: true});
        const db = mongoose.connection;
        db.once("open",()=>{
            console.log("Connected to test database");
           done();
           
        })
       

    });      
       describe("GET Cinemas",()=>{
           it("should respond with an object of cinema array",(done)=>{          
               let req = {};
               let res = testUtils.responseValidatorAsync(200,(cinemas)=>{
                   //cinemas.cinemas.length.should.equal(1);                 
                   cinemas.cinemas[0].should.have.property("cinema_id");
                   done();
                  
               });
               getCinemas(req,res);
               
           })
       })
       
    describe("GET Movies",()=>{
        it("should respond with an object of movie array",(done)=>{          
            let req = {};
            let res = testUtils.responseValidatorAsync(200,(movies)=>{
                           
                movies.movies[0].should.have.property("Title");
                done();
               
            });
            getMovies(req,res);
            
        })
    })
    describe("GET Showtimes",()=>{

        it("should respond with an object of array of showtime",(done)=>{          
            let req = {
                params:{timeid:"2020-03-25"}
            };
            let next = sinon.spy();
            let res = testUtils.responseValidatorAsync(200,(showtimes)=>{
                
                showtimes.showtimes[0].should.have.property("date");
                done();
               
            });
            getShowtimesByTime(req,res,next);
            
        })
    })
   
    describe("GET Movie By Id",()=>{
        it("should respond with a movie with specific id",(done)=>{          
            let req = {
                params:{movieid:"tt8141270"}
            };
            let next = sinon.spy();
            let res = testUtils.responseValidatorAsync(200,(movie)=>{
                movie.movie.should.have.property("Year");
                done();
               
            });
            getMovieById(req,res,next);
            
        })
    })
    describe("GET Movie By Id error test",()=>{
        it("should return error message",(done)=>{
            chai.request(app)
            .get("/movies")
            .set({movieid:"123"})
            .end((err,res)=>{
                expect(404,res.status);
                expect("Could not find this route",res.error.text.message);
                done();
            })
      
    })
});
    describe("GET cinema by Id ",()=>{
        it("should respond with a movie with specific id",(done)=>{          
            let req = {
                params:{cinemaid:10662}
            };
            let next = sinon.spy();
            let res = testUtils.responseValidatorAsync(200,(cinema)=>{
                cinema.cinema.should.have.property("city");
                done();
               
            });
            getCinemaById(req,res,next);
            
        })
    })
    after(function(done){
        mongoose.connection.db.dropDatabase(function(){
          mongoose.connection.close(done);
        });
      });




});