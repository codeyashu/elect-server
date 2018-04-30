import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import Main from '../components/Main/Main';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default Home;
