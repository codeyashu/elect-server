import React, { Component } from 'react';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Main />
        <BottomNav />
      </div>
    );
  }
}

export default HomePage;
