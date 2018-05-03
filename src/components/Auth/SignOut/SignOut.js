import React, { Component } from 'react';

import { auth } from '../../../firebase';

class SignOut extends Component {
  render() {
    return (
      <button
        type="button"
        className="SignOut btn"
        onClick={auth.doSignOut}
      >
        Sign Out
      </button>
    );
  }
}

export default SignOut;