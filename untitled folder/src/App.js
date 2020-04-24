import React, { useState, useCallback }  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Welcome from './welcome/welcome';
import Singleplace from './places/components/Singleplace';
import Movies from './movies/pages/Movies';
import Reviews from './Reviews/pages/Reviews'
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import Description from './movies/pages/Description';
import AboutUs from './AboutUs/AboutUs';
import ShowTime from './showtimes/pages/ShowTime';
import Buy from './shared/components/FormElements/Buy';
import Auth from './user/pages/Auth';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if(token) {
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
          <Route path="/reviews" exact>
            <Reviews />
          </Route>
          <Route path="/description/:movieId" exact>
            <Description />
          </Route>
      
          <Route path="/:theaterId/theaterinfo" exact>
            <Singleplace />
          </Route>
          <Route path="/showtime/:timeid" exact>
            <ShowTime />
          </Route>
          <Route path="/checkout/:theatreid/:movieid/:theatrename/:moviename/:showtime" exact>
            <Buy />
          </Route>
     
          <Redirect to="/" />
        </Switch>
    );
  }else{
    routes=(
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
          <Route path="/description/:movieId" exact>
            <Description />
          </Route>   
          <Route path="/:theaterId/theaterinfo" exact>
            <Singleplace />
          </Route>
          <Route path="/showtime/:timeid" exact>
            <ShowTime />
          </Route>
          <Route path="/auth">
          <Auth />
          </Route>
          <Redirect to="/auth" />
          </Switch>
    )
  }
  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}
  >
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  </AuthContext.Provider>
);
};

export default App;
