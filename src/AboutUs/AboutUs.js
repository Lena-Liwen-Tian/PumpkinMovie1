import React from 'react';
import './AboutUs.css';
import logo from './WechatIMG2.jpeg';
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
         Since this is only phase one, I did not really connect the three databases I found online. I am not sure what kind of 
         interesting results it will be after I reorganize them and store them in my own database. But for now, I feel that the relationships
         among these three databases are not simple. They have some many to many relationships, for instance a movie can have a lot of thow times,
         and a lot of movies can be watched at the same time periods in the cinema. I also found that different types of movies have different 
         show times, for instance, a horror film is always shown at night. I will keep seeing more interesting facts later.     
         <br /><br />
          My group name is Pumpkin. For me, pumpkin means magic, I hope my website can let users feel magic.
          I complete this project by myself. My name is Liwen Tian, a student at UT-Austin.
          I am a first-year master student majoring in Information Science. I am in the Software Engineer track in our program. I
          have some experences of software development. I love Java best, but I am trying to learn more interesting languages now. This 
          is my first time to use MERN. I always used Pyhton for backend before. I hope you enjoy my project.
          I ran it locally in the first phase and upload it into Github several days before. I just found I had three commits. I did not have 
          any issues.
          <br /><br />
        My website is connected to three databases. I use python to scrape the data through the APIs these three database provides.
        <br />
        IMDB database:https://www.imdb.com/interfaces/
        <br />
        GRACENOTE DEVELOPER database:http://developer.tmsapi.com/docs/read/data_v1_1/movies/Movie_showtimes
        <br />
        MOVIEGLU database:https://developer.movieglu.com/
        <br />
        I use full stack MERN to build this website. I use React for front end, Express and Node.js for back end development.
        I create my own MongoDB database to hold all data scraped from the online databases and rearrange them in a way I want.
        GitHub:https://github.com/Lena-Liwen-Tian/PumpkinMovie1
        <br /><br />
        I do not want you to see my face.
        
    </p>
     
  </div>
};

export default AboutUs;