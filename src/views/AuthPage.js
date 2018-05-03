import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import SignIn from '../components/Auth/SignIn/SignIn';
import SignUp from '../components/Auth/SignUp/SignUp';

class AuthPage extends Component {
  render() {
    return (
      <div className="AuthPage">
        <SideNav />
        <SignIn />
        <SignUp />
        <BottomNav />
      </div>
    );
  }
}

export default AuthPage;
