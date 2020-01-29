import React from 'react';
// import './App.css';
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   Link 
// } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Footer from './Footer'
// import Main from './Main';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/portfolio' component={Portfolio}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}
