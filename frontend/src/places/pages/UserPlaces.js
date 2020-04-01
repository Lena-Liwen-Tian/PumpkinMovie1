import PlaceList from '../components/PlaceList';
import React, { useEffect,useState } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import PaginationPage from '../../shared/components/UIElements/pagination';
const UserPlaces = () => {
  const[LoadedTheatres,setLoadedTheatres] = useState([]);
  const[isLoading,setisLoading] = useState(false);
  const[error,setError] = useState();
  const[currentPage,setcurrentPage] = useState(1);
  const postsPerPage = 20;
  const [currentPosts,setcurrentPosts] = useState([]);
  
  useEffect(()=>{

    const fetchTheatres = async()=>{
      setisLoading(true);
      try{          
        const response= await fetch(`https://pumpkintry.herokuapp.com/api/theatres`); 
        const responseData = await response.json();
        if(!response.ok){
    
          throw new Error(responseData.message);
        }
        setLoadedTheatres(responseData.cinemas);
      } catch (err) {
        setError(err.message);
      }
      setisLoading(false);
    };

    fetchTheatres();
  },[]);

  const indexOfLastPosts = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPosts - postsPerPage;
   const paginate = pageNumber => setcurrentPage(pageNumber);

  useEffect(()=>{
    const updatePosts=()=>{
    setcurrentPosts(LoadedTheatres.slice(indexOfFirstPost,indexOfLastPosts))};
    updatePosts()},[LoadedTheatres,currentPage,PaginationPage]);

  const errorHandler = () =>{
    setError=(null);
  }
   
  

  return(       
    <React.Fragment>
    <PaginationPage postsPerPage={postsPerPage} totalPosts={LoadedTheatres.length} currentpage={currentPage} paginate={paginate}/>
    {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedTheatres && <PlaceList items={currentPosts} />}
     </React.Fragment>)
  };

export default UserPlaces;
