import React, { Component } from 'react';

import BottomNav from '../components/Nav/BottomNav/BottomNav';

import withAuthorization from '../App/withAuthorization';
import { auth, db } from '../firebase';

import web3 from '../contract/web3';
import elect from '../contract/elect';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class VotePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vid: '',
      cname: '',
      cid: '',
      cdistrict: '',
      cstate: '',
      candidate: [],
      selectedOption: 1,
      status: ''
    }
  }

  async componentDidMount() {
    let uid;
    await auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("success!!")
        uid = user.uid;
      } else {
        console.log("failure getting uid");
      }
    })
    let vid = await db.getvid(uid);
    let cinfo = await db.getConstituency(vid);
    let candidate = await db.getCandidates(cinfo.cid);
    console.log(candidate);
    this.setState({
      vid: vid,
      cname: cinfo.name,
      cid: cinfo.cid,
      cdistrict: cinfo.district,
      cstate: cinfo.state,
      candidate: candidate
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    console.log("pid:", this.state.selectedOption);
    console.log("cid:", Number(this.state.cid.substr(1)));
    console.log("vid:", this.state.vid);
    const accounts = await web3.eth.getAccounts();
    const status = await elect.methods.castVote(Number(this.state.cid.substr(1)), this.state.selectedOption, this.state.vid).send({
      from: accounts[0]
    })
    console.log(status);
    this.setState({ status: JSON.stringify(status) });
  }

  render() {
    return (
      <div className="VotePage container">

        <div className="wrapper">

          <div className="ConstituencyData card col-md-4 offset-md-1">
            <span> <h3> Voter ID: <b> {this.state.vid} </b> </h3> </span>
            <span> <h3> <b> Constituency Details </b> </h3> </span>
            <span> <h3> Name: {this.state.cname} </h3> </span>
            <span> <h3> District: {this.state.cdistrict} </h3> </span>
            <span> <h3> State: {this.state.cstate} </h3> </span>
          </div>
          <div className="CandidateData card col-md-4">
            <span> <h3>  <b> Candidate Details </b> </h3> </span>
            {this.state.candidate.map(cand => {
              return (
                <span key={cand.pid}>
                  <h3> {cand.name} | {cand.party}</h3>
                </span>
              )
            })}
          </div>
        </div>

        <div className="wrapper">
            <form onSubmit={this.onSubmit} className="VoteForm">
              {this.state.candidate.map(cand => {
                return (
                  <div className="radio" key={cand.pid}>
                    <label>
                      <input
                        type="radio"
                        name="selection"
                        value={cand.pid}
                        onChange={event => {
                          this.setState(byPropKey('selectedOption', event.target.value))
                        }}
                      />
                      <h3>{cand.name} | {cand.party}</h3>
                    </label>
                  </div>
                )
              })}
              <button type="submit" className="btn">
                Vote
              </button>
            </form>
          <div className="VoteStatus col">
            <h3> Status </h3>
            <h6> {this.state.status} </h6>
          </div>
          
        </div>
        <BottomNav />
      </div>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(VotePage);

            /* <form onSubmit={this.onSubmit} className="VoteForm">
            {this.state.candidate.map(cand => {
              return (
                <label key={cand.toString()}>
                  <input form-check-input type="radio" value={cand.pid} checked={this.setState({selectedOption: cand.pid})}/>
                    <h3>{cand.name} --- {cand.party}</h3>
                </label>
              )
            })}
            </form> */