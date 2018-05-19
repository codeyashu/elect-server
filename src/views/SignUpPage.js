import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles/AuthPage.css';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import SignUpForm from '../components/Auth/SignUp/SignUpForm';
import SignInLink from '../components/Auth/SignIn/SignInLink';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignUpPage container">
        <SignUpForm history={this.props.history} />
        <SignInLink />
        <BottomNav />
      </div>
    );
  }
}

export default withRouter(SignUpPage);
