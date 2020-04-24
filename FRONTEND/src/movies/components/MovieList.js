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
          key={movie.imdbID}
          id={movie.imdbID}
          image={movie.Poster}
          name={movie.Title}
          time={movie.length}
          genre={movie.Genre}
          rating={movie.imdbRating}
        />
      ))}
    </ul>
  );
};

export default MovieList;
