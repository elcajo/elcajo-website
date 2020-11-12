import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Achievements from './components/pages/Achievements';
import Subscribe from './components/pages/Subscribe';
import Community from './components/pages/Community';
import Automation from './components/pages/Automation';
import Award from './components/pages/Award';
import Pioneer from './components/pages/Pioneer';
import Businesspartnerships from './components/pages/Businesspartnerships';
import Webdev from './components/pages/Webdev';
import Appdev from './components/pages/Appdev';
import Multimedia from './components/pages/Multimedia';
import Datasecurity from './components/pages/Datasecurity';
import Error404 from './components/pages/Error404';
import Profile1 from './components/pages/Profile1';
import Profile2 from './components/pages/Profile2';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/elcajo-website' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/achievements' exact component={Achievements}/>
        <Route path='/community' exact component={Community}/>
        <Route path='/subscribe' exact component={Subscribe}/>
        <Route path='/automation' exact component={Automation}/>
        <Route path='/award' exact component={Award}/>
        <Route path='/businesspartnerships' exact component={Businesspartnerships}/>
        <Route path='/pioneer' exact component={Pioneer}/>
        <Route path='/webdev' exact component={Webdev}/>
        <Route path='/appdev' exact component={Appdev}/>
        <Route path='/multimedia' exact component={Multimedia}/>
        <Route path='/datasecurity' exact component={Datasecurity}/>
        <Route path='/profile1' exact component={Profile1}/>
        <Route path='/profile2' exact component={Profile2}/>
        <Route exact component={Error404}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
