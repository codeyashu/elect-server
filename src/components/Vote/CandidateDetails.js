import React from 'react';
import './Vote.css';

function CandidateDetails(props) {
  return (
    <div className="CandidateDetails col-md-4">
      <h3 className="header"><b>Candidate Details</b></h3>
      {props.candidate.map(cand => {
        return (
          <span key={cand.pid}>
            <h3> {cand.name} | {cand.party}</h3>
          </span>
        )
      })}
    </div>
  );
}

export default CandidateDetails;
