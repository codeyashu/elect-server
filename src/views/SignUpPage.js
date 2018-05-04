import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignUpPage">
        <BottomNav />
        <h1>SignUp</h1>
        <SignUpForm history={this.props.history} />
      </div>
    );
  }
}

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      //    username,
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error:', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      password,
      error,
    } = this.state;

    const isValid =
      username === '' ||
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className="SignUpForm col-md-5">
              <label>Voter ID</label>
        <div className="form-group">
          <input
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            className="form-control"
            placeholder="Voter Id"
          />
        </div>
        <div className="form-group">
        <label>Email ID</label>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="email"
            className="form-control"
            autoComplete="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
        <label>Password</label>
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            className="form-control"
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>
        <button disabled={isValid} type="submit" className="btn">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignUpLink extends Component {
  render() {
    return (
      <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
      </p>
    );
  }
}

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink
}