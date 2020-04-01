import React from 'react';
import ShowTimeItem from './ShowTimeItem';
import './ShowTimeList.css'
const ShowTimeList = props =>{

        return (
          <span className="u">
            {props.items.map(time => (    
              <div className="con">       
              <ShowTimeItem
                key={time._id}
                date={time.date}
                imdbID={time.imdbID}
                theatre={time.theatre.name}
                theatreid={time.cinemaid}
                des = {time.des}
                image={time.newimage}
                title={time.title}
                time={time.time}
              />
              </div>     
            ))}
          </span>
        );
      };
      




export default ShowTimeList;



