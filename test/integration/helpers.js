/* Integration test dependencies */
const supertest = require('supertest');
const chai = require('chai');
const app = require('../../src/app');

global.request = supertest(app);
global.expect = chai.expect;
global.app = app;
