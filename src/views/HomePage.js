import React, { Component } from 'react';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

import withAuthorization from '../App/withAuthorization';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Main />
        <BottomNav />
      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);