
import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from '../FormElements/Button';
const Filterbutton= props =>{

    const[Title,setTitle] = useState({"All":props.title});
    let endarr=[];
    Object.entries(props.elements).map(([key,value])=>{
    const changeValue = (key,value) =>{
      props.filterby(key,value);
      if(value !== "All") {
        setTitle({key:value});
      }else{
          setTitle({"All":props.title})
      }   
    }
    
    let arr=[];
    for (let i = 0; i <value.length; i++) {
        arr.push(<Dropdown.Item as="button" onClick={()=>changeValue(key,value[i])}>{value[i]}</Dropdown.Item>)
    }
    endarr.push(<DropdownButton id="dropdown-item-button" title={Title.key === undefined ?Title.All:Title.key}>
      {arr}
    </DropdownButton>)
   

 });
 
 
return (
 <table>
     <tr>
         {endarr.map(a=><td>{a}</td>)}
     </tr>
 </table>


)};
export default Filterbutton;