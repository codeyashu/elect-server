import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Blog from '../views/Blog';
import Vote from '../views/Vote';
import Auth from '../views/Auth';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => {
          const [subdomain] = window.location.hostname.split('.');
          if (subdomain === 'blog') return <Blog />;
          return <Home />;
        }}/>
        <Route path='/signin' component={Auth}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/vote' component={Vote}/>
      </Switch>
    );
  }
}

export default App;
