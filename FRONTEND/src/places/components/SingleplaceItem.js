import Button from '../../shared/components/FormElements/Button';
import React, { useState } from 'react';
import './SingleplaceItem.css';
import ModalOverlay from '../../shared/components/UIElements/ModalOverlay';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';
const SingleplaceItem = props => {

  const [show,setShow] = useState(false);
  const openMadal = () => setShow(true);
  const closeMadal = () => setShow(false);
  let coordinates={lat:props.lat,lng:props.lng};
  return (
    <React.Fragment>
      <ModalOverlay  title={props.name} show={show} hide={closeMadal} coordinates={coordinates} />  
    <div className="card mb-3" style={{maxwidth: "540px"}}>
    
        <div className="row no-gutters">
          <div className="col-md-4">  
          <img src= {props.image} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.name}</h1>
              <p className="card-text"></p>
              <p>Address: {props.address}</p>
    <p>Phone: {props.phone}</p>
  
              <Button onClick={openMadal}>VIEW ON MAP</Button>
              
            </div>
          </div>
        </div>
        
      </div>
        
      </React.Fragment>

     )
};
export default SingleplaceItem;