import React from 'react';
import './Table.css';

function PartyTable() {
    return (
        <table className="PartyTable">
              <tr>
                <th>Party</th>
                <th>ID</th>
              </tr>
              <tbody>
                <tr>
                  <td>BJP</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>INC</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>JDS</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
    );
}

export default PartyTable;