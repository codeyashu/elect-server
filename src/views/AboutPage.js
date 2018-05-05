import React, { Component } from 'react';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import AboutDetails from '../components/Details/AboutDetails';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <AboutDetails />
        <BottomNav />
      </div>
    );
  }
}

export default AboutPage;
