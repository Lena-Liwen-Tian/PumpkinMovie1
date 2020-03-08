import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './MovieItem.css';

const MovieItem = props => {
  return (
    <div className="user-item a">
      
        <Link to={`/${props.id}/description`}>
        
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
       
         
          <h3>{props.name}</h3>
      
        </Link>
    </div>
  );
};

export default MovieItem;
