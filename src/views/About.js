import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import Main from '../components/Main/Main';

class About extends Component {
  render() {
    return (
      <div className="About">
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default About;
