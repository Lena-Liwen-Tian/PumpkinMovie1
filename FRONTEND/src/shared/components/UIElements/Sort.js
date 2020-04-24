
import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './Sort.css';
const Sortbutton= props =>{
    const[Title,setTitle] = useState("Sort by");
    const arr = [];
    const changeSort = e =>{
        props.sortby(e);
        setTitle(e);
    }

for(let i = 0; i < props.items.length; i++) {
arr.push(<Dropdown.Item as="button" onClick={()=>changeSort(props.items[i])}>{props.items[i]}</Dropdown.Item>)
};
return(
   
    <DropdownButton id="dropdown-item-button" title={Title}>
   {arr}
  </DropdownButton>
 
)
};
export default Sortbutton;

