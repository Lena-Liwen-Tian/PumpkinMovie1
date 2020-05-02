
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import Card from '../../shared/components/UIElements/Card';
  import Button from '../../shared/components/FormElements/Button';
  import './PlaceItem.css';
  const BlueButton = () =>{

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
        ButtonButton = color(Button);
  }
  export default BlueButton;

  