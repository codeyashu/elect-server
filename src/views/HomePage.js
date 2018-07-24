import React, { Component } from 'react';
import withAuthorization from '../App/withAuthorization';
import elect from '../contract/elect';
import web3 from '../contract/web3';
import './styles/HomePage.css';

import BottomNav from '../components/Nav/BottomNav/BottomNav';
import PartyList from '../components/Table/PartyTable';
import ConstituencyTable from '../components/Table/ConstituencyTable';


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      voters: [],
      verify: '',
      address: '',
      cid: '',
      status: '',
      votes: {
        p1: '',
        p2: '',
        p3: '',
      },
      result: {
        p1: '',
        p2: '',
        p3: '',
      },
    }
  }

  async componentDidMount() {
    try {
      let voters = await elect.methods.getVoters().call();
      this.setState({ voters });
    } catch (err) {
      console.log("error getting voter list:", err);
    }
  }

  onSubmit1 = async (event) => {
    event.preventDefault();
    let verify = await elect.methods.verifyVote(this.state.address).call();
    this.setState({ verify: "Party ID: " + verify });
  }

  onSubmit2 = async (event) => {
    event.preventDefault();
    let votes = await elect.methods.getVotes(this.state.cid).call();
    this.setState(state => {
      state.votes.p1 = "Party 1: " + votes.p1;
      state.votes.p2 = "Party 2: " + votes.p2;
      state.votes.p3 = "Party 3: " + votes.p3;
      return state;
    });
  }

  getResults = async (event) => {
    event.preventDefault();
    let result = await elect.methods.getResults().call();
    this.setState(state => {
      state.result.p1 = "Party 1: " + result.p1 + " Seats";
      state.result.p2 = "Party 2: " + result.p2 + " Seats";
      state.result.p3 = "Party 3: " + result.p3 + " Seats";
      return state;
    });
  }

  findResults = async (event) => {
    event.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      try {
        let status = await elect.methods.findResults().send({
          from: accounts[0]
        });
        this.setState({ status: JSON.stringify(status) });
      } catch (err) {
        console.log("Error Finding Results", err);
      }
    } catch (err) {
      console.log("Error getting accounts from web3:", err);
    }


  }

  render() {
    const {
      address,
      cid
    } = this.state;

    return (
      <div className="HomePage container">

        <div className="HomeWrapper">
          <div className="VoterList List col-md-5">
            <h3 className="VoterListHeader Header">Voter List</h3>
            {
              this.state.voters.map(element =>
                <li key={element}>{element}</li>
              )}
          </div>
          <div className="PartyList List col-md-3">
            <h3 className="PartyListHeader Header">Party List</h3>
            <PartyList />              
          </div>
          <div className="ConstituencyList List col-md-3">
            <h3 className="ConstituencyListHeader Header">Constituency List</h3>
            <ConstituencyTable />
          </div>
        </div>

        <div className="HomeWrapper">

          <form onSubmit={this.onSubmit2} className="GetVotesForm HomeForm col-md-4">
            <h3 className="GetVotesHeader Header">Get Votes</h3>
            <div className="form-group">
              <label>Constituency ID
              <input
                  value={cid}
                  onChange={event => this.setState(byPropKey('cid', event.target.value))}
                  type="text"
                  className="form-control"
                  placeholder="Constituency ID"
                />
              </label>
            </div>
            <button type="submit" className="btn Button">
              Submit
          </button>
            <div className="GetVoteResult">
              <h3 className="Result">{this.state.votes.p1}</h3>
              <h3 className="Result">{this.state.votes.p2}</h3>
              <h3 className="Result">{this.state.votes.p3}</h3>
            </div>
          </form>
              
          <div className="GetResults col-md-4">
            <h3 className="GetResultsHeader Header" onClick={this.getResults}>Get Results</h3>
            <div className="GetVoteResult">
              <h3 className="Result">{this.state.result.p1}</h3>
              <h3 className="Result">{this.state.result.p2}</h3>
              <h3 className="Result">{this.state.result.p3}</h3>
            </div>
          </div>

          <form onSubmit={this.onSubmit1} className="VerifyVoteForm HomeForm col-md-4">
            <h3 className="VerifyVoteHeader Header">Verify Vote</h3>
            <div className="form-group">
              <label>Address
              <input
                  value={address}
                  onChange={event => this.setState(byPropKey('address', event.target.value))}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </label>
            </div>
            <button type="submit" className="btn Button">
              Submit
          </button>
            <h3 className="VerifyVoteResult Result">{this.state.verify}</h3>
          </form>

        </div>

        <div className="HomeWrapper">
          <div className="FindResults col-md-10">
            <h3 className="FindResultsHeader Header" onClick={this.findResults}>Find Results</h3>
            <h6 className="FindResultsStatus">{this.state.status}</h6>
          </div>
        </div>
        
        <BottomNav />
      </div >
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
