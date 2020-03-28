import React from 'react';
import Card from '../UIElements/Card';
import { useParams } from 'react-router-dom';
import Button from './Button';
import './Buy.css';
const Buy = props => {
    let movieid = useParams().movieid;
    let theatreid =useParams().theatreid;

  return (<Card className="ticket">
      <table>
  <tr>
      <td className="tickettitle"><strong>You Ticket</strong>
      </td>
   
  </tr>
  <tr>
  <td className="ticketline">
    Movie: {movieid}
      </td>

  </tr>
  <tr>
    <td className="ticketline">
    Location: {theatreid}
    </td>
  </tr>  
  <tr>
    <td className="ticketline">
    Price: $15
    </td>
  </tr>  
  <tr>
    <td className="confirm">
    <Button>Confirm</Button>
    </td>
  </tr>

 
 </table>
  </Card>);


}

export default Buy;