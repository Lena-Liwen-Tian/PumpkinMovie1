import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './ShowTimeItem.css';


const ShowTimeItem = props => {
  let theatreid = props.theatreid.toString();
  return (
    <div className="box">
    <div className="row no-gutters">
      <div>  
      <img src= {props.image} className="mg" />
      </div>
      <div>
           <div >
           <Link to={`/description/${props.imdbID}`}><h6 className="card--title">{props.title}</h6></Link>
           <p className="content">{props.des}</p>
           <h6 className="card--title">Location</h6>
           <Link to={`/${theatreid}/theaterinfo`}><p className="content">{props.theatre}</p></Link>
           <h6 className="card--title">Time</h6>
           <h6 className="card--title">{props.time}</h6>
            <Link className="buy" to={`/checkout/${props.theatreid}/${props.imdbID}`}><h6 className="card--title">BUY</h6></Link>
            </div>
        </div>
      </div>
    </div>
    
   
  );
};

export default ShowTimeItem;







