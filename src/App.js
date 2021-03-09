import logo from './logo.svg';
import React, { useState } from 'react';

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import './App.css';

import Land from './Land';
import Dash from './Dash';
import ProtectedRoutes from './ProtectedRoutes';
import ApprovalJourney from './ApprovalJourney';
import Unauthorized from './Unauthorized';
import Login from './Login';

import TestTable from './TestTable'
import Accordions from './Accordions'
import Page25 from './Page25'
import Page30 from './Page30'
import Page39 from './Page39'
import Page6F from './Page6F'
import Page10F from './Page10F'
// import Page21 from './Page21'
import SideBar from './SideBar'

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = e => {
    
    e.preventDefault();
    setUser(true);
    if (user==true) {
      return <Redirect to="/" />;
    }
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }
  return (
    <BrowserRouter>
    <Switch>
      
     <Page30
     
     />
     {/* <ProtectedRoutes exact path='/dashboard' user={user} handleLogout={handleLogout} component={Dash} />
     <PublicRoutes exact path='/' user={user.toString()} handleLogin={handleLogin} component={Land} /> 
     <PublicRoutes exact path='/Page10f' component={Page10F} /> 
     <Route exact path='/unauthorized' component={Unauthorized} />
     <PublicRoutes exact path='/login' user={user} users = {user} handleLogin={handleLogin} component={Login} /> */}
     </Switch>
</BrowserRouter>
   
    
  );
}

export default App;
