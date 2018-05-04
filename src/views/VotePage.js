import React, { Component } from 'react';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

import withAuthorization from '../App/withAuthorization';

class VotePage extends Component {
  render() {
    return (
      <div className="VotePage">
        <Main />
        <BottomNav />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(VotePage);