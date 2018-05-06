import React, { Component } from 'react';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage container-fluid">
        <Main />
        <BottomNav />
      </div>
    );
  }
}

export default LandingPage;
