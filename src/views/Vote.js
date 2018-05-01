import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import Main from '../components/Main/Main';

class Vote extends Component {
  render() {
    return (
      <div className="Vote">
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default Vote;