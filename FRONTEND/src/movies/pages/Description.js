import React,{useState,useEffect} from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useParams } from 'react-router-dom';
import MovieDescription from'./MovieDescription';
import ShowTimeList from '../../showtimes/components/ShowTimeList';

  const Description = props => {
  let movieid = useParams().movieId;
  const [LoadedDes, setLoadedDes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Loadedshowtimes,setLoadedshowtimes] = useState();

  useEffect(() => {
     const fetchDes = async () => {
      try{        
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL +`/movies/${movieid}`);
        
        setLoadedDes(responseData.movie);
        setLoadedshowtimes(responseData.showtimes);    
      } catch (err) {       
      }
    };
    fetchDes();
  },[movieid]);

 
  return (
    <React.Fragment>
    {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedDes && <MovieDescription des = {LoadedDes}/>}
    {!isLoading && Loadedshowtimes && <ShowTimeList items={Loadedshowtimes}/>}
    </React.Fragment>)

};




export default Description;