import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import * as routes from '../../../constants/routes';

function SignInLink() {
  return (
    <div className="SignInLink">
      Already have an account?
        {'  '}
      <Link to={routes.SIGN_IN} className="link">Sign In</Link>
    </div>
  );
}

export default SignInLink;
