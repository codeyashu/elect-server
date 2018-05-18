import React from 'react';
import { auth } from '../../../firebase';

function SignOut() {
  return (
    <button
      type="button"
      className="SignOut btn btn-outline-info"
      onClick={auth.doSignOut}
    >
      Sign Out
    </button>
  )
}

export default SignOut;
