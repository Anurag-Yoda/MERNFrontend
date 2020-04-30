import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from '../src/shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';


const App = () =>  {
  return (
    
    <Router>
    <MainNavigation/>
    <main>
    <Switch>
     <Route path = '/:userId/places' exact>
       <UserPlaces/>
     </Route>
      <Route path = '/new' exact>
        <NewPlace/>
      </Route>
      <Route path = '/' exact>
        <Users/>
      </Route>
      <Redirect to = "/"/>
      </Switch>
      </main>
    </Router>
   
  );
}

export default App;
