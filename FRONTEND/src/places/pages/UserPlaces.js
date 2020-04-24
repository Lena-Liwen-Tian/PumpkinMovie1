import PlaceList from '../components/PlaceList';
import React, { useEffect,useState } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import PaginationPage from '../../shared/components/UIElements/pagination';
import Sortbutton from '../../shared/components/UIElements/Sort';
import Searchbutton from '../../shared/components/UIElements/Search';
import Filterbutton from '../../shared/components/UIElements/Filter';
import Button from '../../shared/components/FormElements/Button';
const UserPlaces = () => {
  const[LoadedTheatres,setLoadedTheatres] = useState([]);
  const[isLoading,setisLoading] = useState(false);
  const[error,setError] = useState();
  const[currentPage,setcurrentPage] = useState(1);
  const postsPerPage = 20;
  const [currentPosts,setcurrentPosts] = useState([]);
  const [Sort,setSort] = useState("");
  const[Filter,setFilter] = useState("");
  const[Search,setSearch] = useState("");
  const[originaltheatres,setoriginaltheatres]=useState([]);
  


  useEffect(()=>{

    const fetchTheatres = async()=>{
      setisLoading(true);
      try{          
        const response= await fetch(`https://pumpkinphasethree.herokuapp.com/api/theatres`); 
        const responseData = await response.json();
        if(!response.ok){
    
          throw new Error(responseData.message);
        }
        setoriginaltheatres(responseData.cinemas)
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

   const sortby = method => {
    let theatres;
    if(method === "Name (A-Z)"){
       theatres = LoadedTheatres.sort((a,b)=>{
       setSort(method);
       if(a.cinema_name.toLowerCase() < b.cinema_name.toLowerCase()) return -1;
       if(a.cinema_name.toLowerCase() > b.cinema_name.toLowerCase()) return 1;
       return 0;
     })
    }else if(method === "Distance (nearby)"){
      setSort(method);
      theatres = LoadedTheatres.sort((a,b)=>{
      return a.distance - b.distance;
     })
    }
    setLoadedTheatres(theatres);
  }

 const searchtheatre = e =>{ 

   let title;
   let postcode;
   setSearch(e);
   title = originaltheatres.filter((contact) => {
    return contact.cinema_name.toLowerCase().split(' ').join('').indexOf(e.toLowerCase().split(' ').join('')) !== -1;
   });
   postcode = originaltheatres.filter((contact) => {
     return contact.postcode.toString().indexOf(e)!==-1;
   });
   setLoadedTheatres(postcode.length > 0 ? postcode:title);
 }

 const elements = {
   "Distance":{"Distance":["within 20 miles","20 - 50 miles","beyond 50 miles","All"]}
 }
 const changeFilter = (k,v) => {
   let theatres;
   let valuearr = v.split(" ");
  if(k === "Distance"){
    setFilter("Distance");     
    let value = valuearr[valuearr.length-2];
    console.log(value);
    if(valuearr[0]==="All") {
      theatres = originaltheatres;
   }
    else if(valuearr[0] === "within"){
      theatres = originaltheatres.filter((contact)=>(contact.distance < parseInt(value,10)));
    }else if (valuearr[0] === "20"){   
       theatres = originaltheatres.filter((contact)=>(contact.distance >= 20 && contact.distance < 50));
    }else{
      theatres = originaltheatres.filter((contact)=>(contact.distance >= 50));
    }  
  }else if(k === "Clean Filter"){
    setFilter("Clean");
    theatres = originaltheatres;
 }
 setLoadedTheatres(theatres);
}



  useEffect(()=>{
    const updatePosts=()=>{
    setcurrentPosts(LoadedTheatres.slice(indexOfFirstPost,indexOfLastPosts))};
    updatePosts()},[LoadedTheatres,currentPage,Sort,Filter,Search]);

  const errorHandler = () =>{
    setError=(null);
  }
   
  

  return(       
    <React.Fragment>
      <table className="subtitle">
   <tr>
     <td>
   <Sortbutton className="sortbutton" items={["Name (A-Z)","Distance (nearby)"]} sortby={sortby} />
   </td>
     <td className="tablecontent2">
    <Searchbutton placeholder="Search by cinema name or zipcode" change={searchtheatre}/>
     </td>
     <td className="tablecontent3">
     <Filterbutton title= "Distance" elements={elements.Distance} filterby={changeFilter}/>
     </td>
     
   
   <td className="tablecontent">
     <PaginationPage className="page" postsPerPage={postsPerPage} currentpage={currentPage} totalPosts={LoadedTheatres.length} paginate={paginate}/>
     </td>
     </tr>
   </table>
      
    {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedTheatres && <PlaceList items={currentPosts} />}
     </React.Fragment>)
  };

export default UserPlaces;
