import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn col-md-4">
        <form>
          <div className="form-group">
            <label htmlFor="Email2">Email address</label>
            <input type="email" className="form-control" id="Email2" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="Password2">Password</label>
            <input type="current-password" className="form-control" id="Password2" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
