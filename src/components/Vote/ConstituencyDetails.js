import React from 'react';
import './Vote.css';

function ConstituencyDetails(props) {
  return (
    <div className="ConstituencyDetails col-md-4">
      <h3 className="header"><b>Constituency Details</b></h3>
      <h3>ID: {props.constituency.id}</h3>
      <h3>Name: {props.constituency.name}</h3>
      <h3>District: {props.constituency.district}</h3>
      <h3>State: {props.constituency.state}</h3>
    </div>
  );
}

export default ConstituencyDetails;
