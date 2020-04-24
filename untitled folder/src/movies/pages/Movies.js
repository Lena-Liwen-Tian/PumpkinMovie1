import './Movies.css';
import React, { useEffect,useState } from 'react';
import MovieList from '../components/MovieList';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import PaginationPage from '../../shared/components/UIElements/pagination';
import Sortbutton from '../../shared/components/UIElements/Sort';
import Searchbutton from '../../shared/components/UIElements/Search';
import Filterbutton from '../../shared/components/UIElements/Filter';
import Button from '../../shared/components/FormElements/Button';
const Movies = () => {
  const[LoadedMovies,setLoadedMovies] = useState([]);
  const[isLoading,setisLoading] = useState(false);
  const[error,setError] = useState();
  const[currentPage,setcurrentPage] = useState(1);
  const postsPerPage = 20;
  const [currentPosts,setcurrentPosts] = useState([]);
  const [Sort,setSort] = useState("");
  const[Filter,setFilter] = useState("");
  const[Search,setSearch] = useState("");
  const[originalmovies,setoriginalmovies]=useState([]);
  const[filtermovies,setfiltermovies] = useState([]);
  
  useEffect(()=>{

    const fetchMovies = async()=>{
      setisLoading(true);
      try{          
        const response= await fetch(`https://pumpkinphasethree.herokuapp.com/api/movies`); 
        const responseData = await response.json();
        if(!response.ok){
    
          throw new Error(responseData.message);
        }
        setfiltermovies(responseData.movies);
        setoriginalmovies(responseData.movies);
        setLoadedMovies(responseData.movies);
      } catch (err) {
        setError(err.message);
      }
      setisLoading(false);
    };

    fetchMovies();
  },[]);
//Loaded movies is the the original one or changed because of the sorting and filter
//added the sort and filter(GROUP,year,rating(range,above),genre,country),search(keyword) first then add the pigination
//has a default sorting method(ALPHEBETIC, year,timelength/runtime,rating), the default of search is 0;

  const indexOfLastPosts = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPosts - postsPerPage;
   const paginate = pageNumber => setcurrentPage(pageNumber);

   const sortby = method => {
     let movies;
     if(method === "Title (A-Z)"){
        movies = LoadedMovies.sort((a,b)=>{
        setSort(method);
        if(a.Title.toLowerCase() < b.Title.toLowerCase()) return -1;
        if(a.Title.toLowerCase() > b.Title.toLowerCase()) return 1;
        return 0;
      })
     }else if(method === "Year (most recent)"){
       setSort(method);
       movies = LoadedMovies.sort((a,b)=>{
       return b.Year - a.Year;
      })
     }else if(method === "Runtime (longest)"){
       setSort(method);
        movies = LoadedMovies.sort((a,b)=>{
        a = a.Runtime.split(" ");
        b = b.Runtime.split(" ");

        return a[0] - b[0];
       })
     }else if(method === "Rating (highest)"){
        setSort(method);
         movies = LoadedMovies.sort((a,b)=>{
        return b.imdbRating - a.imdbRating;
       })
     }
     setLoadedMovies(movies);
   }

  const searchmovie = e =>{ 
   
    setSearch(e);
    let title;
    let description;
    title = originalmovies.filter((contact) =>{
      return contact.Title.replace(/\s/g,'').toLowerCase().indexOf(e.replace(/\s/g,'').toLowerCase()) !== -1 ;
    });
    description = originalmovies.filter((contact) =>{
    return contact.Actors.replace(/\s/g,'').toLowerCase().split(',').join('').indexOf(e.replace(/\s/g,'').toLowerCase()) !== -1 ;
   });
    setLoadedMovies(title.length > 0 ? title:description);
  }
  const elements = {
    "Year":{"Year":["Before 2010","2010 - 2012","2012 - 2014","2014 - 2016","2016 - 2018","2018 - 2020","All"]},
    "Rating":{"Rating":["Below 5","5 - 7","7 - 8","8 - 10","All"]},
    "Country":{"Country":["USA","Others","All"]},
  }
  const changeFilter = (k,v) => {
    let movies;
    let valuearr = v.split(" ");
   if(k === "Year"){
     setFilter("Year");     
     let value = valuearr[valuearr.length-1];
     if(valuearr[0]==="All") {
      movies = filtermovies;
    }
     else if(valuearr[0] === "Before"){
        movies = filtermovies.filter((contact)=>(parseInt(contact.Year) < parseInt(value)));
     }else{   
        movies = filtermovies.filter((contact)=>(parseInt(value)-2 <= parseInt(contact.Year) && parseInt(contact.Year) < parseInt(value)));
     }
    
   }else if(k === "Rating"){
     setFilter("Rating");      
       let value = valuearr[valuearr.length-1];
       if(valuearr[0] ==="All") {
         movies = filtermovies;
       }
       else if(valuearr[0] === "Below"){
         
         movies = filtermovies.filter((contact)=>(parseInt(contact.imdbRating) < parseInt(value)));
       }else{
        movies = filtermovies.filter((contact)=>(parseInt(value)-2 <= parseInt(contact.Year) && parseInt(contact.imdbRating) < parseInt(value)));
       }
     }else if(k === "Country"){
      setFilter("Country");
      if(valuearr[0]==="All") {
        movies = filtermovies;
      }
      else if(v === "USA"){
        movies =filtermovies.filter((contact)=>contact.Country === "USA");
       }else{
        movies = filtermovies.filter((contact)=>contact.Country !== "USA");
       }     
  }else if(k === "Clean Filter"){
     movies = originalmovies;
  }
  setLoadedMovies(movies);
}

  useEffect(()=>{
    const updatePosts=()=>{ 
    setcurrentPosts(LoadedMovies.slice(indexOfFirstPost,indexOfLastPosts))};
    updatePosts()},[LoadedMovies,currentPage,Sort,Filter,Search]);
    
  return(       
    <React.Fragment>

   <table className="moviesubtitle">
   <tr>
     <td>
   <Sortbutton className="sortbutton" items={["Title (A-Z)","Year (most recent)","Runtime (longest)","Rating (highest)"]} sortby={sortby} />
   </td>
 
     <td className="tablecontent2">
    <Searchbutton placeholder = "Search by movie title or actor name" change={searchmovie}/>
     </td>
     <td className="tablecontent3">
     <Filterbutton title= "Country" elements={elements.Country} filterby={changeFilter}/>
     </td>
  
   
   <td className="tablecontent">
     <PaginationPage className="page" postsPerPage={postsPerPage} currentpage={currentPage} totalPosts={LoadedMovies.length} paginate={paginate}/>
     </td>
     </tr>
   </table>
      

    {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedMovies&&<MovieList items={currentPosts}/>} 
    </React.Fragment>)
  };

export default Movies;



          



