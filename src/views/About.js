import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import AboutDetails from '../components/Details/AboutDetails/AboutDetails';

class About extends Component {
  render() {
    return (
      <div className="About">
        <SideNav />
        <AboutDetails />
        <BottomNav />
      </div>
    );
  }
}

export default About;
