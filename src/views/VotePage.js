import React, { Component } from 'react';

import BottomNav from '../components/Nav/BottomNav/BottomNav';

//import { db } from '../firebase';
import withAuthorization from '../App/withAuthorization';


class VotePage extends Component {

  render() {
    return (
      <div className="VotePage container">
        <BottomNav />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(VotePage);


/* auth.onAuthStateChanged((user) => {
  if (user) {
    user.updateProfile({
      voterId: this.state.voterId
    }).then(() => {
      console.log("profile update successful");
    }).catch(() => {
      console.log("error voterid update");
    })
  }
}) */