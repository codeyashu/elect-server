// Create local instance of deployed contract 

import web3 from './web3';

// Copy contract interface (ABI) and contract address from
// deployed lottery contract and paste in here

const address = '0x9BC105De55856a8131BFDB5a562dDa1d272868FA';

const abi = [{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_ID","type":"string"}],"name":"checkE","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pickWinner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"c101","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

// Use address and abi to create local contract instance using web3 library
// This local copy acts as abstraction of deployed contract

export default new web3.eth.Contract(abi, address);
