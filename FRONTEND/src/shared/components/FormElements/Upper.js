import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

const upper = (Button) =>(props)=>{
    class UpperButton extends React.Component{
      render(){
        return (
          <Button {...props}>
            {props.children.toString().toUpperCase()}
          </Button>
        )
      }   
    }
    return <UpperButton/>;
  }


  export default upper;