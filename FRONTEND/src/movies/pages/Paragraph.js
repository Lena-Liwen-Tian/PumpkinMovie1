import './Movies.css';
import React, { useEffect,useState } from 'react';
import MovieList from '../components/MovieList';
import { useHttpClient } from '../../shared/hooks/http-hook';
import PaginationPage from '../../shared/components/UIElements/pagination';
import Sortbutton from '../../shared/components/UIElements/Sort';
import Searchbutton from '../../shared/components/UIElements/Search';
import Filterbutton from '../../shared/components/UIElements/Filter';
const Paragraph = props =>{
    
   return( <React.Fragment>
           <p><strong>Year</strong> {props.des.Year}</p>
            <p><strong>Released</strong> {props.des.Released}</p>
            <p><strong>Director</strong> {props.des.Director}</p>
            <p><strong>Writer</strong> {props.des.Writer}</p>
            <p><strong>Actors</strong> {props.des.Actors}</p>
            <p><strong>Rating</strong>  {props.des.imdbRating}</p>
              <p><strong>Time</strong>  {props.des.Runtime}</p>
     <p><strong>Genre</strong>  {props.des.Genre}</p>
              <p>{props.des.Plot}</p>
              </React.Fragment>
   )
}
export default Paragraph;