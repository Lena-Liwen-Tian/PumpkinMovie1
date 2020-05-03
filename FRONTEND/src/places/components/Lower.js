import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Button from '../../shared/components/FormElements/Button';


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
        return <LowerButton />;
        }
        
    



export default lower;
