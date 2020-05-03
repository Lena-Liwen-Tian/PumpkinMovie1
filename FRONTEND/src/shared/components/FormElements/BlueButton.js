
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import Card from '../../shared/components/UIElements/Card';
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

  