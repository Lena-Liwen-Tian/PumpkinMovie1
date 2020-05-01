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
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
const[have,sethave] = useState(true);
    useEffect(() => {
       const fetchTheatre = async () => {
        try{          
          const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/theatres/${theaterId}`);
          if(responseData.movies.length === 0) {
            sethave(false);
        }
          setLoadedTheatre(responseData.cinema);
          setLoadedMovies(responseData.movies);
          
        } catch (err) {
        }     
      };
  
      fetchTheatre();
   
    },[theaterId]);

   
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