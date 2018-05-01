import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <SideNav />
        <BottomNav />
      </div>
    );
  }
}

export default Contact;
