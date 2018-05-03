import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import CompactPost from '../components/Post/CompactPost/CompactPost';

class BlogPage extends Component {
  render() {
    return (
      <div className="BlogPage">
        <SideNav />
        <CompactPost />
        <BottomNav />
      </div>
    );
  }
}

export default BlogPage;
