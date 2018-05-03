import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import BlogPage from '../views/BlogPage';
import VotePage from '../views/VotePage';
import SignInPage from '../views/SignInPage';
import SignUpPage from '../views/SignUpPage';

import SideNav from '../components/Nav/SideNav/SideNav';
import { firebase } from '../firebase';
import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <div>
        <SideNav authUser={this.state.authUser} />
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

export default App;
