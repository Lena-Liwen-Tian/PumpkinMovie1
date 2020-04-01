import React, { useEffect,useState } from 'react';
import ShowTimeList from '../components/ShowTimeList';
import { useParams } from 'react-router-dom';
import Calendar from '../components/calendar';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import axios from 'axios';
    
    const ShowTime = props => {
    
      const timeid = useParams().timeid;
      const [LoadedShowtimes, setLoadedShowtimes] = useState();
      const [isLoading,setisLoading] = useState(false);
      const [error, setError] = useState();
      useEffect(() => {
        
         const fetchShowtimes = async () => {
          setisLoading(true);

          try{          
            const response= await fetch(`https://pumpkintry.herokuapp.com/api/showtimes/${timeid}`); 
            const responseData = await response.json();
            
            if(!response.ok){
              throw new Error(responseData.message);
            }
            setLoadedShowtimes(responseData.showtimes);
            
          } catch (err) {
            setError(err.message);
          }
          setisLoading(false);
        };

        fetchShowtimes();
      },[timeid]);
      const errorHandler = () =>{
        setError=(null);
      }
     
      return (        
      <React.Fragment>
        <Calendar />
        {isLoading && (<div>
          <LoadingSpinner />
        </div>)}  
      {!isLoading && LoadedShowtimes &&<ShowTimeList items={LoadedShowtimes}/>}
      </React.Fragment>);
};



export default ShowTime;