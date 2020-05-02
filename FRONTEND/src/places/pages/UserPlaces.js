import PlaceList from '../components/PlaceList';
import React, { useEffect,useState } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import PaginationPage from '../../shared/components/UIElements/pagination';
import Sortbutton from '../../shared/components/UIElements/Sort';
import Searchbutton from '../../shared/components/UIElements/Search';
import Filterbutton from '../../shared/components/UIElements/Filter';

const UserPlaces = () => {
  const { isLoading,sendRequest } = useHttpClient();
  const[LoadedTheatres,setLoadedTheatres] = useState([]);
  const[currentPage,setcurrentPage] = useState(1);
  const postsPerPage = 20;
  const [currentPosts,setcurrentPosts] = useState([]);
  const [Sort,setSort] = useState("");
  const[Filter,setFilter] = useState("");
  const[Search,setSearch] = useState("");
  const[originaltheatres,setoriginaltheatres]=useState([]);
  
  function tolower(a){
    return a.cinema_name.toLowerCase();
  }


  useEffect(()=>{

    const fetchTheatres = async()=>{
      try{          
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/theatres`);
        setoriginaltheatres(responseData.cinemas)
        setLoadedTheatres(responseData.cinemas);
      } catch (err) {
      }
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
       if(tolower(a) < tolower(b)) return -1;
       if(tolower(a) > tolower(b)) return 1;
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
      
    {!isLoading && LoadedTheatres && <PlaceList items={currentPosts} />}
     </React.Fragment>)
  };

export default UserPlaces;
