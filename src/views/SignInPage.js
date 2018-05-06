import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import SignUpLink from '../components/Auth/SignUp/SignUpLink';
import SignInForm from '../components/Auth/SignIn/SignInForm';

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


/* import { auth } from '../firebase';
import * as routes from '../constants/routes'; */

/* const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className="SignInForm col-md-5">
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
        <button disabled={isInvalid} type="submit" className="btn">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 */

/* export {
  SignInForm,
}; */