import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './MovieItem.css';

const MovieItem = props => {
  return (
    <div className="textover">
    <Link to={`/description/${props.id}`}>          
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>  
          <div className="name">
          <p className="title">{props.name}</p>         
          </div>  
         
          <p className="rating">Rating: {props.rating}</p>     
        
     </Link>
     </div>

  );
};

export default MovieItem;
