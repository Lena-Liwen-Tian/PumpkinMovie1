import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './ShowTimeItem.css';


const ShowTimeItem = props => {
  return (
    <div className="card card1 mb-3" style={{maxwidth: "540px"}}>
    <div className="row no-gutters">
      <div className="col-md-4">  
      <img src= {props.image} className="card-img" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">Ratings: <small className="text-muted">{props.rating}</small></p>
          <div>
               
              {props.time.map(t =>             
                (<div><hr></hr><p className="up">{t.theater}</p>
                {t.times.map(d => 
                (<Button className="bu">{d}</Button>))}
                </div>))
            }
         </div>
        </div>
      </div>
    </div>
    
  </div>
   
  );
};

export default ShowTimeItem;







