import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import './PlaceList.css';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.cinema_id}
          id={place.cinema_id}
          image={place.image}
          title={place.cinema_name}
          address={place.address}
          phone={place.phone}
          lat={place.lat}
          lng={place.lng}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
