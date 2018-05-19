import React, { Component } from 'react';
import withAuthorization from '../App/withAuthorization';
import { auth, db } from '../firebase';
import './styles/VotePage.css';

import web3 from '../contract/web3';
import elect from '../contract/elect';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import CandidateDetails from '../components/Vote/CandidateDetails';
import ConstituencyDetails from '../components/Vote/ConstituencyDetails';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class VotePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vid: '',
      constituency: {
        id: '',
        name: '',
        district: '',
        state: '',
      },
      candidate: [],
      selectedOption: 1,
      status: ''
    }
  }

  async componentDidMount() {
    let uid;
    await auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("success getting uid")
        uid = user.uid;
      } else {
        console.log("failure getting uid");
      }
    })
    let vid = await db.getvid(uid);
    let cinfo = await db.getConstituency(vid);
    let candidate = await db.getCandidates(cinfo.cid);
    this.setState({
      vid: vid,
      candidate: candidate,
      constituency: {
        id: cinfo.cid,
        name: cinfo.name,
        district: cinfo.district,
        state: cinfo.state,
      }
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ status: 'Waiting for Vote to be mined.' })
    console.log("pid:", this.state.selectedOption);
    console.log("cid:", this.state.constituency.id);
    console.log("vid:", this.state.vid);
    const accounts = await web3.eth.getAccounts();
    try {
      const status = await elect.methods.castVote(this.state.constituency.id, this.state.selectedOption, this.state.vid).send({
        from: accounts[0]
      })
      console.log(status);
      this.setState({ status: JSON.stringify(status) });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="VotePage container">

        <div className="VoterIdDiv">
          <h3 className="VoterIdLabel">Voter ID: {this.state.vid}</h3>
        </div>
        <div className="wrapper">
          <ConstituencyDetails constituency={this.state.constituency} />
          <CandidateDetails candidate={this.state.candidate} />
        </div>

        <div className="wrapper">

          <div className="VoteFormDiv  col-md-4">

            <h3 className="VoteFormHeader">Vote Responsibly</h3>
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
              <button type="submit" className="btn VoteFormButton">
                Vote
              </button>
            </form>
          </div>
          <div className="VoteStatus col-md-8">
            <h3 className="VoteStatusHeading">Status</h3>
            <h6>{this.state.status}</h6>
          </div>

        </div>

        <BottomNav />
      </div>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(VotePage);
