import React from 'react';
import Button from '../../shared/components/FormElements/Button';

 const Movie = props => {
    
     return(

    <div className="card mb-3" style={{maxwidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">  
          <img src= {props.image} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.name}</h1>
              <p className="card-text">Time: <small className="text-muted">{props.length}</small></p>
              <p className="card-text">Genre: {props.genre.map(g=> (<small className="text-muted">{g}   </small>))}</p>
              <p className="card-text">{props.description}</p>
           
              <Button className="b">Buy a Ticket</Button>
            </div>
          </div>
        </div>
        
      </div>

     )
};

export default Movie;