import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);
 
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
          <NavLink to={`/showtime/2020-03-22`}>Show Times</NavLink>
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

      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}

      
    </ul>
  );
};

export default NavLinks;
