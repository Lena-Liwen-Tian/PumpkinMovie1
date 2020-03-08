import React from 'react';
import ShowTimeItem from './ShowTimeItem';
import './ShowTimeList.css'
const ShowTimeList = props =>{
      

        return (
          <ul className="u">
            {props.items.map(time => (

              <ShowTimeItem
                key={time.id}
                id={time.id}
                image={time.image}
                title={time.name}
                rating={time.rating}
                time={time.showtimes}
              />
            ))}
          </ul>
        );
      };
      




export default ShowTimeList;



