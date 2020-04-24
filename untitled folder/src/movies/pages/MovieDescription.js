import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import {Link} from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
 const MovieDescription = props => {
     let genre = props.des.Genre;
     return(
      <React.Fragment>
    <div className="card mb-3" style={{maxwidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">  
          <img src= {props.des.Poster} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.des.Title}</h1>
            <p><strong>Year</strong> {props.des.Year}</p>
            <p><strong>Released</strong> {props.des.Released}</p>
            <p><strong>Director</strong> {props.des.Director}</p>
            <p><strong>Writer</strong> {props.des.Writer}</p>
            <p><strong>Actors</strong> {props.des.Actors}</p>
            <p><strong>Rating</strong>  {props.des.imdbRating}</p>
              <p><strong>Time</strong>  {props.des.Runtime}</p>
     <p><strong>Genre</strong>  {props.des.Genre}</p>
              <p>{props.des.Plot}</p>
          

            </div>
          </div>
        </div>
       
        
      </div>
  
      <p style={{fontSize:"25pt",paddingleft:"30%",color:"white",textAlign:"center"}} className="buytickets">Buy Tickets</p> 
    

      </React.Fragment>

     
     )};

export default MovieDescription;