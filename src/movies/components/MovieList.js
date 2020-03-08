import React from 'react';

import MovieItem from './MovieItem';
import Card from '../../shared/components/UIElements/Card';
import './MovieList.css';

const MovieList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No movies found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(movie => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          image={movie.image}
          name={movie.name}
          time={movie.length}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </ul>
  );
};

export default MovieList;
