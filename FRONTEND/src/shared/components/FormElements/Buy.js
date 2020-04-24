import React,{useState,useEffect} from 'react';
import Card from '../UIElements/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import axios from "axios";
import {toast} from "react-toastify";
import Button from './Button';
import './Buy.css';

const Buy = props => {
  const [LoadedDes, setLoadedDes] = useState();
const [isLoading,setisLoading] = useState(false);
const [error, setError] = useState();
toast.configure();
    let movieid = useParams().movieid;
    let theatre =useParams().theatreid;
    let moviename= useParams().moviename;
    let theatrename = useParams().theatrename;
    let showtime = useParams().showtime;

    const [product] = React.useState(
      {
      movieid:movieid,
      theatreid:theatre,
      moviename:moviename,
      theatrename:theatrename,
      price:15},
    )
    const buttonstyle={
      background:"#FF7417",
      backgroundImage:"#FF7417"
    }
    useEffect(() => {
      const fetchMovie = async () => {
      console.log(movieid);
       setisLoading(true);
       try{          
         const response= await fetch(`https://pumpkinphasethree.herokuapp.com/api/movies/${movieid}`); 
         const responseData = await response.json();
         console.log(responseData)
         if(!response.ok){
           console.log(responseData)
           throw new Error(responseData.message);
         }
         setLoadedDes(responseData.movie);   
         console.log(LoadedDes);    
       } catch (err) {
         setError(err.message);
       }
       setisLoading(false);
     };
 
     fetchMovie();
   },[movieid]);


 async function handleToken(token){
 const response = await axios.post('https://pumpkinphasethree.herokuapp.com/cart',{token,product});
 const {status} = response.data
 if(status === 'success'){
   toast("Success! Check email for details!",{type:"success"});
 }else{
   toast("Something went wrong",{type:"error"});
 }
}
  return (
    <React.Fragment>
      {isLoading && (<div><LoadingSpinner /></div>)}
    {!isLoading && LoadedDes && 
    <div className="ticket">
    <div className="row no-gutters">
      <div>  
      <img src= {LoadedDes.Poster} className="ticketmg" />
      </div>
      <div>
           <div>

           
           <Link to={`/description/${movieid}`}><h6 className="ticket--title">{LoadedDes.Title}</h6></Link>
           <p className="ticket--des">{LoadedDes.Plot}</p>
           <Link to={`/${theatre}/theaterinfo`}><h6 className="ticket--title">Location: {theatrename}</h6></Link>
    <h6 className="ticket--title">Time: {showtime}</h6>
    <h6 className="ticket--title">Price: ${product.price}</h6>
           <StripeCheckout 
    stripeKey="pk_test_P75FnWrf1B5LPGyovDcsMfok00OAcSj1KQ"
    token={handleToken}
    billingAddress
    shippingAddress
    amount={product.price * 100}
    name={product.movieid}
    style={buttonstyle}
    />
           
            </div>
        </div>
      </div>
    </div>

}</React.Fragment>);


}

export default Buy;