import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import AboutDetails from '../components/Details/AboutDetails/AboutDetails';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <SideNav />
        <AboutDetails />
        <BottomNav />
      </div>
    );
  }
}

export default AboutPage;
