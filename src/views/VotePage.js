import React, { Component } from 'react';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import Main from '../components/Main/Main';

class VotePage extends Component {
  render() {
    return (
      <div className="VotePage">
        <Main />
        <BottomNav />
      </div>
    );
  }
}

export default VotePage;
