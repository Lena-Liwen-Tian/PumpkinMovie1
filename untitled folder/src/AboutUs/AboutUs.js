import React from 'react';
import './AboutUs.css';
import commit from './commit.jpg';
import issues from './issues.jpg';
import backend from './backend.jpg';
import frontend from './frontend.jpg';
const AboutUs =() =>{

  return <div className ="about">
      <p> My Pumpkin Movie Website provides users a better way to buy their ideal movie tickets online. Users can find the 
          movie descriptions, movie time, movie genres, movie ratings. Users can also get the information of different movie 
          theatres in the United States, they can find the nearest movie theatres, locations and contact information. Besides, 
          Users can find the show times for different movies in different theaters. Imagine you are looking for a movie to 
          watch with your friends. On my website, you can get the movie you like, choose the perfect time and nearest movie theatre.
          How fantastic it is! My target users are young people who prefer an easier way to enjoy a moive and always persue a better viewing experiences in the theatres.
          <br /><br />
         I used three databases for this project, one movie database(description of movies),one show times database(different show times of moives),
         one theatre database(theatre locations and contact information in the United States).
         I have already registered an account name in these database and connected to all of them. Though they provide similar information, they are focused on 
         different aspects. After fetching data, I cleaned some irrelevant information and connected these three collections in my Mongodb. I found that, we can use
         the movie_id to find the theaters showing this movie and the showtimes of this movie. We can also use the theatre_id to find out movies shown at this theatre and
         different showtimes. Showtime_id is also connected to the other two collections in the similar way. I hope I could find more connections later.  
         <br /><br />
          My group name is Pumpkin. For me, pumpkin means magic, I hope my website can let users feel magic.
          I complete this project by myself. My name is Liwen Tian, a student at UT-Austin.
          I am a first-year master student majoring in Information Science. I am in the Software Engineer track in our program. I
          have some experences of software development. I love Java best, but I am trying to learn more interesting languages now. This 
          is my first time to use MERN. I always used Pyhton for backend before. I completed both the front end and back end for this project. Till now, I created 27 commits
          in total, I closed the issue in Phase 2 and generated 12 new user stories(issues) in this Phase. I completed 44 unit tests in total.
          <br/>
          <br/>
          Total number of commits(27) are shown as follows:
          I feel sorry that I tried to use Nodejs to connect to the GITHUB API at the very beginning, But it seems that they have 
          some limit in the number of fetches per day. So I think showing you the screenshot is a better way, in case you cannot
          see anything when the limit is reached.
          <br/>
          <br/>
          <img style = {{marginLeft:"10%",width: "50%", height:"50%"}} src={commit}/>
          <br />
          <br />
          Toal number of issues are shown below:
          <br />
          <br />
          <img style = {{width: "50%", height:"50%"}} src={issues}/>
          <br />
          <br />
          Backend Unit tests
          <br/>
          <br/>
          <img style ={{width: "50%", height:"50%"}} src={backend}/>
          <br />
          <br />
          Frontend Unit tests
          <br/>
          <br/>
          <img style = {{width: "50%", height:"50%"}} src={frontend}/>
          <br /><br />
        My website is connected to three databases.
        <br />
        IMDB database:https://www.imdb.com/interfaces/
        <br />
        GRACENOTE DEVELOPER database:http://developer.tmsapi.com/docs/read/data_v1_1/movies/Movie_showtimes
        <br />
        MOVIEGLU database:https://developer.movieglu.com/
        <br />
        I used Python to scrape the data from IMDB, it changes its name to OMDB now, I got the movie information in details from
        this database.
        I used PHP to get the data from GRACENOTE. it only provides the sample codes of PHP. I got the showtimes information from it.
        I also used Python to get the data from MOVIEGLUE, I got theaters information from it.
        In this Phase, I collected more data for movies and theatree. Now, I have houndreds of data for movies and showtimes, and around 100 data for theatres

        I use full stack MERN to build this website. I use React for front end, Express and Node.js for back end development. I used Mocha, Chai to test backend. I tested
        different routes and I also tested the models I created. Besides Mocha, I used Jest and Enzyme to test the front end. I test a lot of React components and functions embeded in them.
        For the GUI test, I followed the instruction, I used Selenium. I used AWS together with Heroku to deploy my website.
        I create my own MongoDB database online to hold all data scraped from the online databases and rearrange them in a way I want.
        GitHub:https://github.com/Lena-Liwen-Tian/PumpkinMovie1
        <br /><br />
        I do not want you to see my face.
        
    </p>
     
  </div>
};

export default AboutUs;