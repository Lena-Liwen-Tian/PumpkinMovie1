import React, { useEffect } from 'react';
import {addWeeks,subWeeks,addMonths,subMonths,startOfWeek,addDays,format,isSameMonth,isSameDay,endOfWeek,startOfMonth,endOfMonth,parse} from 'date-fns';
import './calendar.css';
import {useState}  from 'react';
import ShowTime from '../pages/ShowTime';
import { relativeTimeThreshold } from 'moment';
import { Link } from 'react-router-dom';

class Calendar extends React.Component {
 newDate = new Date("2020-03-23");

  state = {
    currentWeek: this.newDate,
    currentMonth: this.newDate,
    selectedDate: this.newDate,
    currentYear:this.newDate.getFullYear(),
    check:false
  };

  renderHeader() {
    const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
    <span>{month[this.state.currentMonth.getMonth()]}  {this.state.currentYear}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    
    const DAYS = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    let days=[];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {DAYS[i]}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentWeek} = this.state;
  
    const startDate = startOfWeek(currentWeek);
    const endDate = endOfWeek(currentWeek);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    
    while (day <= endDate) {
       
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        let sameday = isSameDay(day, this.state.selectedDate)? "selected" : "";
        let showtime = addDays(startDate,i);       
         let m = showtime.getMonth()+1;
         let month = showtime.getMonth()+1>=10? "":"0";
         let showtimesId = showtime.getFullYear() + "-" + month + m +"-"+ showtime.getDate(); 
        days.push(
          
          <div         
            className={`col cell ${sameday}` } 
            key={day} id={day} onClick={() => this.setState({selectedDate:addDays(startDate, i)})}
            >
            <Link className ="link" to={`/showtime/${showtimesId}`}>
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            </Link>
          </div>
         
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day} >
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  nextMonth = () => {
     this.setState({
     currentWeek: addWeeks(this.state.currentWeek,1),
     currentMonth:addWeeks(endOfWeek(this.state.currentWeek),1)
    });
    
  };

  prevMonth = () => {
    this.setState({
      currentWeek: subWeeks(this.state.currentWeek,1),
      currentMonth:subWeeks(endOfWeek(this.state.currentWeek),1)
    });
   
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;