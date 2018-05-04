import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from '../views/LandingPage';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import BlogPage from '../views/BlogPage';
import VotePage from '../views/VotePage';
import SignInPage from '../views/SignInPage';
import SignUpPage from '../views/SignUpPage';
import SideNav from '../components/Nav/SideNav/SideNav';

import withAuthentication from './withAuthentication';
import * as routes from '../constants/routes';

class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.BLOG} component={BlogPage} />
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route path={routes.CONTACT} component={ContactPage} />
        <Route path={routes.VOTE} component={VotePage} />
        <Route path={routes.SIGN_IN} component={SignInPage} />
        <Route path={routes.SIGN_UP} component={SignUpPage} />
      </div>
    );
  }
}

export default withAuthentication(App);
