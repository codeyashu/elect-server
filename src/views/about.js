import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import Main from '../components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="about">
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default App;
