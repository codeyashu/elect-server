import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';

import { auth } from '../firebase/fire';

import * as routes from '../constants/routes';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignUpPage">
        <SideNav />
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
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Election Id"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="email"
          autoComplete="email"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          autoComplete="current-password"
          placeholder="Password"
        />
        <button disabled={isValid} type="submit">
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