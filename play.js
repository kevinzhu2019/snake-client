// play.js
const setupInput = require('./input');

const { connect } = require('./client');
console.log('Connecting ...');
const connection = connect();

setupInput(connection);

