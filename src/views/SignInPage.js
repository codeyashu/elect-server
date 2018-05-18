import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Views.css';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import SignInForm from '../components/Auth/SignIn/SignInForm';
import SignUpLink from '../components/Auth/SignUp/SignUpLink';

class SignInPage extends Component {
  render() {
    return (
      <div className="SignInPage container">
        <SignInForm history={this.props.history} />
        <SignUpLink />
        <BottomNav />
      </div>
    );
  }
}

export default withRouter(SignInPage);
