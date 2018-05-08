// Create local instance of deployed contract 

import web3 from './web3';

// Copy contract interface (ABI) and contract address from
// deployed lottery contract and paste in here

const address = '0x6D484eE75B2aA993813073311a0f26A74d82419A';

const abi = [{"constant":false,"inputs":[{"name":"_cid","type":"uint256"},{"name":"_pid","type":"uint256"},{"name":"_vid","type":"string"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_ID","type":"string"}],"name":"checkE","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"verifyVote","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cid","type":"uint256"},{"name":"pid","type":"uint256"}],"name":"getVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cid","type":"uint256"}],"name":"getResult","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVoters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

// Use address and abi to create local contract instance using web3 library
// This local copy acts as abstraction of deployed contract

export default new web3.eth.Contract(abi, address);
