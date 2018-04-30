import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import home from '../../views/home';
import about from '../../views/about';
import contact from '../../views/contact';
import blog from '../../views/blog';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/about' component={about}/>
        <Route path='/contact' component={contact}/>
        <Route path='/blog' component={blog}/>
      </Switch>
    );
  }
}

export default App;
