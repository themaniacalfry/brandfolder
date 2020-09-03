/**
 * @file test/lib/express.js
 *
 * A quick express server example of starting a server and passing the request
 * and response to the generated converse plugin `plugin.js`
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 *
 * IMPORTANT: THIS FILE IS AUTO GENERATED, CHANGES MAY BE OVERRIDDEN!
 */

const express     = require('express');
const bodyParser  = require('body-parser');
const brandfolder  = require('../../').marketsharedemo_brandfolder;

var app = express();
app.use(bodyParser.json({ 
  limit: '6mb' 
}));

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.status(200).send('ok');
});

app.post('/', function (req, res) {
  brandfolder(req, res);
});

module.exports = app.listen(3000);
