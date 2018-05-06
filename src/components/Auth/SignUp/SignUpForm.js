import React, { Component } from 'react';
import './SignUp.css';

import { auth, db } from '../../../firebase';
import * as routes from '../../../constants/routes';

const INITIAL_STATE = {
  voterId: '',
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
      voterId,
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        db.addUser(authUser.uid, voterId, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error:', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      voterId,
      email,
      password,
      error,
    } = this.state;

    const isValid =
      voterId === '' ||
      voterId.length !== 5 ||
      password === '' ||
      password.length < 6 ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className="SignUpForm">
        <label>Voter ID</label>
        <div className="form-group">
          <input
            value={voterId}
            onChange={event => this.setState(byPropKey('voterId', event.target.value))}
            type="text"
            className="form-control form-control-lg"
            placeholder="Voter Id"
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="email"
            className="form-control form-control-lg"
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
            className="form-control form-control-lg"
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

export default SignUpForm;
