const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(expect);
chai.use(sinonChai);

const io = require('socket.io-client');
const socketUrl = 'http://localhost:5000';
