import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Welcome from './welcome/welcome';
import Singleplace from './places/components/Singleplace';
import Movies from './movies/pages/Movies';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './movies/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import Description from './movies/pages/Description';
import AboutUs from './AboutUs/AboutUs';
import ShowTime from './showtimes/ShowTime';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/:movieId/description" exact>
            <Description />
          </Route>
          <Route path="/:theaterId/theaterinfo" exact>
            <Singleplace />
          </Route>
          <Route path="/showtime" exact>
            <ShowTime />
          </Route>
          <Redirect to="/" />
        </Switch>
      
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
        <Route path="/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/:movieId/description" exact>
          <Description />
        </Route>
        <Route path="/:theaterId/theaterinfo" exact>
          <Singleplace />
        </Route>
        <Route path="/showtime" exact>
            <ShowTime />
          </Route>
          <Redirect to="/" />
    
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
