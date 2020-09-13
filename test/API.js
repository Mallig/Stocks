const assert = require('assert');
const sinon = require('sinon');
const APIManager = require('../lib/API');
const https = require('https');

var sandbox = sinon.createSandbox();

const dummyPrice = "200"
const dummyResponse = require('./data/priceResponse.json')
dummyResponse['Global Quote']['05. price'] = dummyPrice

var apiKey = 'FAKE-API-KEY'

describe('API', function() {
  var api
  describe('getPrice()', function() {
    beforeEach(function() {
      sandbox.stub(https, 'get').callsFake(() => { return dummyResponse });
      api = new APIManager(apiKey);
    })

    it('returns stock price', function() {
      api.getPrice('IBM').then(function(data) {
        assert.strictEqual(data, dummyPrice)
      });
    })
  })
})