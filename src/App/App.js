import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Blog from '../views/Blog';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Blog' component={Blog}/>
      </Switch>
    );
  }
}

export default App;
