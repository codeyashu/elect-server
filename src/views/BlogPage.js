import React, { Component } from 'react';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import CompactPost from '../components/Post/CompactPost/CompactPost';

//import web3 from '../contract/web3';
import elect from '../contract/elect';

class BlogPage extends Component {

  state = {
    manager: ''
  }

  async componentDidMount () {
    const manager = await elect.methods.getManager().call();
    this.setState({ manager });
  }


  render() {
    return (
      <div className="BlogPage container">
        <h3> blog updates coming soon!</h3>
        <h1>{this.state.manager}</h1>
        <CompactPost />
        <BottomNav />
      </div>
    );
  }
}

export default BlogPage;
