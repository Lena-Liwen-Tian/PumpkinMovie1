import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import ShowListItem from './ShowListItem';
import Button from '../../shared/components/FormElements/Button';
import './ShowList.css';

const ShowList = ()=>{
      if (props.items.length === 0) {
        return (
          <div className="place-list center">
            <Card>
              <h2>No Show Time found</h2>
              <Button to="/places/new">Share Place</Button>
            </Card>
          </div>
        );
      }
    
      return (
        <ul className="place-list">
          {props.items.map(time => (
            <ShowTimeItem
              key={time.id}
              id={time.id}
              image={time.image}
              title={time.title}
              time={time.time}
            />
          ))}
        </ul>
      );
    };
    
export default ShowList;


