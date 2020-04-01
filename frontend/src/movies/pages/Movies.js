
import React, { useEffect,useState } from 'react';
import MovieList from '../components/MovieList';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import PaginationPage from '../../shared/components/UIElements/pagination';
const Movies = () => {
  const[LoadedMovies,setLoadedMovies] = useState([]);
  const[isLoading,setisLoading] = useState(false);
  const[error,setError] = useState();
  const[currentPage,setcurrentPage] = useState(1);
  const postsPerPage = 20;
  const [currentPosts,setcurrentPosts] = useState([]);

  useEffect(()=>{

    const fetchMovies = async()=>{
      setisLoading(true);
      try{          
        const response= await fetch(`https://pumpkintry.herokuapp.com/api/movies`); 
        const responseData = await response.json();
        if(!response.ok){
    
          throw new Error(responseData.message);
        }
        setLoadedMovies(responseData.movies);
      } catch (err) {
        setError(err.message);
      }
      setisLoading(false);
    };

    fetchMovies();
  },[]);

  const indexOfLastPosts = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPosts - postsPerPage;
   const paginate = pageNumber => setcurrentPage(pageNumber);

  useEffect(()=>{
    const updatePosts=()=>{
    setcurrentPosts(LoadedMovies.slice(indexOfFirstPost,indexOfLastPosts))};
    updatePosts()},[LoadedMovies,currentPage,PaginationPage]);

  const errorHandler = () =>{
    setError=(null);
  }
   
  


  return(       
    <React.Fragment>
    <PaginationPage postsPerPage={postsPerPage} currentpage={currentPage} totalPosts={LoadedMovies.length} paginate={paginate}/>
    {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedMovies&&<MovieList items={currentPosts}/>} 
    </React.Fragment>)
  };

export default Movies;



          



