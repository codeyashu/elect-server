import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <SideNav />
        <Main />
        <BottomNav />
      </div>
    );
  }
}

export default HomePage;
