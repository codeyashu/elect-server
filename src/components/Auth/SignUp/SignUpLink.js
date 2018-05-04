import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

import * as routes from '../../../constants/routes';

class SignUpLink extends Component {
  render() {
    return (
      <div className="SignUpLink">
        Don't have an account?
          {'  '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
      </div>
    );
  }
}

export default SignUpLink;