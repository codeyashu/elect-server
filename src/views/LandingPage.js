import React, { Component } from 'react';
import './Views.css';
import bgimage from '../images/bg3.png';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <img className="background" src={bgimage} alt="background" />
        <Main />
        <BottomNav />
      </div>
    );
  }
}

export default LandingPage;
