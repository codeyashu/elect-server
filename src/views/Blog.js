import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import CompactPost from '../components/Post/CompactPost/CompactPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <SideNav />
        <CompactPost />
        <BottomNav />
      </div>
    );
  }
}

export default Blog;
