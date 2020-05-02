import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import SingleplaceItem from './SingleplaceItem';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ShowTimeList from '../../showtimes/components/ShowTimeList';
const LowerButton = () =>{
    const lower = (Button) =>(props)=>{
    
        class LowerButton extends React.Component{
          render(){
            return (
              <Button {...props}>
                {props.children.toString().toLowerCase()}
              </Button>
            )
          }   
        }
        return <LowerButton/>;
        }
        LowerButton = lower(Button);

}


export default LowerButton;
