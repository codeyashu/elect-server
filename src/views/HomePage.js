import React, { Component } from 'react';

import BottomNav from '../components/Nav/BottomNav/BottomNav';

import withAuthorization from '../App/withAuthorization';

import elect from '../contract/elect';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      voters: [],
      votes: '',
      verify: '',
      result: '',
      address: '',
      cid: ''
    }
  }

  async componentDidMount() {
    let voters = await elect.methods.getVoters().call();

    let votes = await elect.methods.getVotes(501, 3).call();

    console.log('votes for congress in constituency c501:', votes);
    console.log('voters:', voters);
    this.setState({ voters });
  }

  onSubmit1 = async (event) => {
    event.preventDefault();

    let verify = await elect.methods.verifyVote(this.state.address).call();
    this.setState({ verify });
  }
  onSubmit2 = async (event) => {
    event.preventDefault();

    let result = await elect.methods.getResult(Number(this.state.cid.substr(1))).call();
    this.setState({ result });
  }

  render() {
    const {
      address,
      cid
    } = this.state;

    return (
      <div className="HomePage container">
        <div className="wrapper">
          <div className="VoterList col-md-5">
            <h3> Voter List </h3>
            {
              this.state.voters.map(element =>
                <li key={element}>{element}</li>
              )}
          </div>

          <form onSubmit={this.onSubmit1} className="GetVoteForm col-md-4">
            <h3> Verify Vote </h3>
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
            <button type="submit" className="btn">
              Submit
          </button>
            <span> <h2> Party ID: {this.state.verify} </h2> </span>
          </form>
        </div>

        <div className="wrapper">
          <div className="PartyLegend">
            <li> Id: 1 | BJP </li>
            <li> Id: 2 | Congress </li>
            <li> Id: 3 | JDS </li>
          </div>
          <div className="PartyLegend">
            <li> CId: C501 | Jayanagar </li>
            <li> CId: C502 | Basvangudi </li>
            <li> CId: C503 | J P Nagar </li>
          </div>

          <form onSubmit={this.onSubmit2} className="GetResult col-md-4">
            <h3> Get Result </h3>
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
            <button type="submit" className="btn">
              Submit
          </button>
            <span> <h2> Leading: {this.state.result} </h2> </span>
          </form>

        </div>
        <BottomNav />
      </div >
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);