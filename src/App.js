import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Footer from './Footer'
import MentorSearch from './MentorSearch'
import MentorPricing from './MentorPricing'
import MentorMatching from './MentorMatching'


import {Switch,Route,Redirect} from 'react-router-dom'


function App() {
  return (
<div>
<Navbar />
<Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/MentorSearch" component={MentorSearch}/>
    <Route exact path="/MentorPricing" component={MentorPricing}/>
    <Route exact path="/MentorMatching" component={MentorMatching}/>



    <Redirect to='/'/>
</Switch>

<Footer/>
</div>
   
   

  )
}

export default App;
