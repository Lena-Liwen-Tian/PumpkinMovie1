import React from 'react';
import './Search.css';

const Searchbutton = props => {
    
    function changevalue(e) {
        props.change(e.target.value);
    };
        
    return (
        <div>
            <input className="inputbox" type = "text" placeholder ={props.placeholder} onChange ={changevalue}></input>
        </div>
    )
}
export default Searchbutton;