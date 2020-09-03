/**
 * @file test/providers-test.js
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 *
 * IMPORTANT: THIS FILE IS AUTO GENERATED, CHANGES MAY BE OVERRIDDEN!
 */

const request     = require('supertest');
const expect      = require('chai').expect;
const server      = require('./lib/express');

describe('Brandfolder providers', function () {

  it('onProviderRegister', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'PLUGIN_REGISTER',
        payload: {
          newRegistration: true,
          registrationData: {
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        done();
      });
  })

  it('onProviderUnegister', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'PLUGIN_UNREGISTER',
        payload: {
          newRegistration: true,
          registrationData: {
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        done();
      });
    })
});
