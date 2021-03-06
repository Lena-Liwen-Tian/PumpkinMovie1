
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import Card from '../../shared/components/UIElements/Card';
  import Button from '../../shared/components/FormElements/Button';
  import './PlaceItem.css';


    const color = (Button) =>(props)=>{
        const mystyle = {background:"white"}
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
       
  
  export default color;

  