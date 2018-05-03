import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import BlogPage from '../views/BlogPage';
import VotePage from '../views/VotePage';
import SignUpPage from '../views/SignUpPage';

import * as routes from '../constants/routes';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.BLOG} component={BlogPage} />
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route path={routes.CONTACT} component={ContactPage} />
        <Route path={routes.VOTE} component={VotePage} />
        <Route path={routes.SIGN_UP} component={SignUpPage} />
      </Switch>
    );
  }
}

export default App;
