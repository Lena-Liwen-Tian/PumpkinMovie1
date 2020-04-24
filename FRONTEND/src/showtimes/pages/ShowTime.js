import React, { useEffect,useState } from 'react';
import ShowTimeList from '../components/ShowTimeList';
import { useParams } from 'react-router-dom';
import Calendar from '../components/calendar';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import axios from 'axios';
import Sortbutton from '../../shared/components/UIElements/Sort';
import Searchbutton from '../../shared/components/UIElements/Search';
import Filterbutton from '../../shared/components/UIElements/Filter';
import './Showtime.css';
    const ShowTime = props => {
      const timeid = useParams().timeid;
      const [LoadedShowtimes, setLoadedShowtimes] = useState();
      const [isLoading,setisLoading] = useState(false);
      const [error, setError] = useState();
  const [Sort,setSort] = useState("");
  const[Filter,setFilter] = useState("");
  const[Search,setSearch] = useState("");
  const[originalmovies,setoriginalmovies]=useState([]);
  const[filtermovies,setfiltermovies] = useState([]);



      useEffect(() => {
        
         const fetchShowtimes = async () => {
          setisLoading(true);

          try{          
            const response= await fetch(`https://pumpkinphasethree.herokuapp.com/api/showtimes/${timeid}`); 
            const responseData = await response.json();
            
            if(!response.ok){
              throw new Error(responseData.message);
            }
            setLoadedShowtimes(responseData.showtimes);
            setoriginalmovies(responseData.showtimes)
            
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




      const sortby = method => {
        let movies;
        if(method === "Title (A-Z)"){
           movies =  LoadedShowtimes.sort((a,b)=>{
           setSort(method);
           if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
           if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
           return 0;
         })
        }else if(method === "Time"){
          setSort(method);
          movies =  LoadedShowtimes.sort((a,b)=>{
          return parseInt(a.time.split(":")[0]) - parseInt(b.time.split(":")[0]);
         })
        }
        setLoadedShowtimes(movies);
        
      }
   
     const searchmovie = e =>{ 
       
       setSearch(e);
       let title;
       let location;
       title = originalmovies.filter((contact) =>{
         return contact.title.replace(/\s/g,'').toLowerCase().indexOf(e.replace(/\s/g,'').toLowerCase()) !== -1 ;
       });
       location = originalmovies.filter((contact) =>{
       return contact.theatre.name.replace(/\s/g,'').toLowerCase().split(',').join('').indexOf(e.replace(/\s/g,'').toLowerCase()) !== -1 ;
      });
      setLoadedShowtimes(title.length > 0 ? title:location);
     }
     const elements = {
       "Time":{"Time":["Morning","Afternoon","Evening","All"]},
     }
     const changeFilter = (k,v) => {
       let movies;
       let valuearr = v.split(" ");
      if(k === "Time"){
        setFilter("Time");     
        let value = valuearr[valuearr.length-1];
        if(valuearr[0]==="All") {
         movies = originalmovies;
       }
        else if(valuearr[0] === "Morning"){
           movies = originalmovies.filter((contact)=>parseInt(contact.time.split(":")[0]) < 12);
        }else if(valuearr[0] === "Afternoon"){   
           movies = originalmovies.filter((contact)=>parseInt(contact.time.split(":")[0]) <= 18 && parseInt(contact.time.split(":")[0]) > 12);
        }else if(valuearr[0] === "Evening"){
          movies = originalmovies.filter((contact)=>parseInt(contact.time.split(":")[0]) >18);
       }
       
      }
      setLoadedShowtimes(movies);
   }
       
   useEffect(()=>{
    const updatePosts=()=>{ 
    setLoadedShowtimes(LoadedShowtimes)};
    updatePosts()},[LoadedShowtimes,Sort,Filter,Search]);
      return (        
      <React.Fragment>
        <table className="showtimesubtitle">
      <tr>
        <td>
      <Sortbutton className="sortbutton" items={["Title (A-Z)","Time"]} sortby={sortby} />
      </td>  
        <td className="tablecontent2">
       <Searchbutton placeholder = "Search by movie title or theatre name" change={searchmovie}/>
        </td>
        <td className="tablecontent3">
        <Filterbutton title= "Time" elements={elements.Time} filterby={changeFilter}/>
        </td>
        </tr>
      </table>
      <Calendar />
        {isLoading && (<div>
          <LoadingSpinner />
        </div>)}  
      {!isLoading && LoadedShowtimes&&<ShowTimeList items={LoadedShowtimes}/>}
      </React.Fragment>);
};



export default ShowTime;