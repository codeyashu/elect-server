import React, { Component } from 'react';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import CompactPost from '../components/Post/CompactPost/CompactPost';

class BlogPage extends Component {
  render() {
    return (
      <div className="BlogPage">
        <CompactPost />
        <BottomNav />
      </div>
    );
  }
}

export default BlogPage;
