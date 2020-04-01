import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  let showtime = new Date();
  let m = showtime.getMonth()+1;
  let month = showtime.getMonth()+1>=10?"":"0";
  let showtimesId = showtime.getFullYear() + "-" + month + m +"-"+showtime.getDate(); 
  console.log(showtimesId)
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/movies" exact>
          Movies
        </NavLink>
      </li>
      <li>
          <NavLink to="/places">Theatres</NavLink>
      </li>     
         <li>
          <NavLink to={`/showtime/${showtimesId}`}>Show Times</NavLink>
        </li>
        <li>
        <NavLink to="/reviews" exact>Reviews</NavLink>
      </li>
     
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutus" exact>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" exact>
          Cart
        </NavLink>
      </li>

      
    </ul>
  );
};

export default NavLinks;
