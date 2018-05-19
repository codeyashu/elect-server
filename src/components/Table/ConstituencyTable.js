import React from 'react';
import './Table.css';

function ConstituencyTable() {
    return (
        <table className="ConstituencyTable">
              <tr>
                <th>Constituency</th>
                <th>ID</th>
              </tr>
              <tbody>
                <tr>
                  <td>Jayanagar</td>
                  <td>301</td>
                </tr>
                <tr>
                  <td>Basvangudi</td>
                  <td>302</td>
                </tr>
                <tr>
                  <td>J P Nagar</td>
                  <td>303</td>
                </tr>
              </tbody>
            </table>
    );
}

export default ConstituencyTable;
