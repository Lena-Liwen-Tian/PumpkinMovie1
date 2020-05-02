import React from 'react';
import Paragraph from './Paragraph';

 const MovieDescription = props => {

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
            <Paragraph/>
          

            </div>
          </div>
        </div>
       
        
      </div>
  
      <p style={{fontSize:"25pt",paddingleft:"30%",color:"white",textAlign:"center"}} className="buytickets">Buy Tickets</p> 
    

      </React.Fragment>

     
     )};

export default MovieDescription;