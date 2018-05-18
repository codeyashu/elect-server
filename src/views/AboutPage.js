import React, { Component } from 'react';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import AboutDetails from '../components/Details/AboutDetails/AboutDetails';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage container">
        <AboutDetails />
        <BottomNav />
      </div>
    );
  }
}

export default AboutPage;
