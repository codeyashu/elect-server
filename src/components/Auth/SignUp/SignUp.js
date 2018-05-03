import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="VoterId">Voter Id</label>
                        <input type="text" className="form-control" id="VoterId" placeholder="Voter Id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email1">Email address</label>
                        <input type="email" className="form-control" id="Email1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password1">Password</label>
                        <input type="current-password" className="form-control" id="Password1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
