import moment from 'moment';
import React from 'react';

const Weekday =() =>{
    let weekdayshort = moment.weekdaysShort();
    let weekdayshortname = weekdayshort.map(day => {
            return (<th key = {day} className = "week-day">{day}</th>);
    });
    return (<div>{weekdayshortname}</div>) 
}
export default Weekday;

