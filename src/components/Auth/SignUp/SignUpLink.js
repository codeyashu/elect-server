import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import * as routes from '../../../constants/routes';

function SignUpLink() {
  return (
    <div className="SignUpLink">
      Don't have an account?
        {'  '}
      <Link to={routes.SIGN_UP} className="link">Sign Up</Link>
    </div>
  );
}

export default SignUpLink;
