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
import TopNav from '../components/Nav/TopNav/TopNav';

import withAuthentication from './withAuthentication';
import * as routes from '../constants/routes';

/* import elect from '../contract/elect';

const test = "0x63768026112e918BFD4E2f6bA8A596190C603Ee3";
const s1 = "vo104";
const s2 = "vo101"; */

class App extends Component {
/*   async componentDidMount() {
    const x = await elect.methods.checkE(test, s1).call();
    console.log("x:", x);
    const y = await elect.methods.checkE(test, s2).call();
    console.log("y:", y);
  } */

  render() {
    return (
      <div>
        <TopNav />
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
