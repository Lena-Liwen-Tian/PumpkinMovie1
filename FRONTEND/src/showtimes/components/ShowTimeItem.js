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
   
           <div className="fontbox">
           <Link to={`/description/${props.imdbID}`}><h6 className="showtimetitle">{props.title}</h6></Link>
           <h6 className="showtimetitle">Location</h6>
           <Link to={`/${theatreid}/theaterinfo`}><p className="showtimecontent">{props.theatre}</p></Link>
           <h6 className="showtimetitle">{props.date}</h6>
           <h6 className="showtimetitle">{props.time}</h6>
            <Link className="buy" to={`/checkout/${props.theatreid}/${props.imdbID}/${props.theatre}/${props.title}/${props.time}`}><h6 className="showtimetitle">BUY</h6></Link>
            </div>
       
      </div>
    </div>
    
   
  );
};

export default ShowTimeItem;







