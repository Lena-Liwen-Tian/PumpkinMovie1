import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './PlaceItem.css';

const PlaceItem = props => {


  const color = (Button) =>(props)=>{
  const mystyle = {backgroundColor:"DodgerBlue"}
  class BlueButton extends React.Component{
    render(){
      return (
        <Button style={mystyle} {...props}>
          {props.children}
        </Button>
      )
    }   
  }
  return <BlueButton/>;
  }

const BlueButton = color(Button);

  return (
   
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <p>Address: {props.address}</p>
            <p>Phone: {props.phone}</p>

              <BlueButton to = {`/${props.id}/theaterinfo`}>
                More
              </BlueButton>
          
          </div>

        </Card>
      </li>
  ) 
};
export default PlaceItem;