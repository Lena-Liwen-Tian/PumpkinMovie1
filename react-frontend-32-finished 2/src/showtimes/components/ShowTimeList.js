import React from 'react';
import ShowTimeItem from './ShowTimeItem';

const ShowTimeList = props =>{
      

        return (
          <ul >
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



