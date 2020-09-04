/**
 * @file test/module-search_assets-test.js
 * @description Searches Brandfolder Assets by tags 
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

const request     = require('supertest');
const expect      = require('chai').expect;
const server      = require('./lib/express');
const {token, orgId} = require('../lib/env');


describe('Search Assets', function () {

  it('CSV tags', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'search_assets',
          moduleParam: {
            tags: 'Smartsheet,Moon'
          },
          registrationData: {
            token,
            orgId
          }        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('value');
        done();
      });
  })
  it('string array tags', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'search_assets',
          moduleParam: {
            tags: '["Smartsheet","Moon"]'
          },
          registrationData: {
            token,
            orgId
          }        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('value');
        done();
      });
  })

  it('array tags', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'search_assets',
          moduleParam: {
            tags: ["Smartsheet", "Moon"]
          },
          registrationData: {
            token,
            orgId
          }        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('value');
        done();
      });
  })
});


