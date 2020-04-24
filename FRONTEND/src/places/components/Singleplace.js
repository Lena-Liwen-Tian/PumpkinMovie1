import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import SingleplaceItem from './SingleplaceItem';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import ShowTimeList from '../../showtimes/components/ShowTimeList';
const Singleplace = props => {
  const theaterId = useParams().theaterId;
  const [LoadedTheatre, setLoadedTheatre] = useState();
  const [LoadedMovies,setLoadedMovies] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [error, setError] = useState();
const[have,sethave] = useState(true);
    useEffect(() => {
       const fetchTheatre = async () => {
        setisLoading(true);
        try{          
          const response= await fetch(`https://pumpkinphasethree.herokuapp.com/${theaterId}`); 
          const responseData = await response.json();
          
          if(!response.ok){
            throw new Error(responseData.message);
          }
          if(responseData.movies.length === 0) {
            sethave(false);
        }
          setLoadedTheatre(responseData.cinema);
          setLoadedMovies(responseData.movies);
          
        } catch (err) {
          setError(err.message);
        }
        setisLoading(false);
       
      
      };
  
      fetchTheatre();
   
    },[theaterId]);
    const errorHandler = () =>{
      setError=(null);
    }
   
    return (
      <React.Fragment>
      {isLoading && (<div><LoadingSpinner /></div>)}
      {!isLoading && LoadedTheatre && <SingleplaceItem
  name = {LoadedTheatre.cinema_name}
  cinemaid = {LoadedTheatre.cinema_id}
  image={LoadedTheatre.image}
  address = {LoadedTheatre.address}
  phone = {LoadedTheatre.phone}
  lat = {LoadedTheatre.lat}
  lng = {LoadedTheatre.lng}
  movies = {LoadedMovies}
  imdbID = {LoadedMovies.imdbID}
  have = {have}/>}
  {!isLoading && LoadedTheatre &&<ShowTimeList items = {LoadedMovies}/>}
      </React.Fragment>)
  
  };


export default Singleplace;