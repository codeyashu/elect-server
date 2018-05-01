import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <SideNav />
        <Main />
        <BottomNav />
      </div>
    );
  }
}

export default Home;
