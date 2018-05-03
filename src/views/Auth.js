import React, { Component } from 'react';
import './views.css'
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import SignIn from '../components/Auth/SignIn/SignIn';
import SignUp from '../components/Auth/SignUp/SignUp';


class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <SideNav />
        <SignUp />
        <SignIn /> 
        <BottomNav />
      </div>
    );
  }
}

export default Auth;
