const assert = require('assert');
const sinon = require('sinon');

const Check = require('../commands/check')
const KeyManager = require('../lib/keyManager')
const APIManager = require('../lib/API')

var sandbox = sinon.createSandbox()

describe('price', function() {
  var check

  beforeEach(function() {
    // mock key manager and API manager 
    var stubKeyManager = sandbox.createStubInstance(KeyManager, {
      getKey: '1234'
    });
    var stubAPIManager = sandbox.createStubInstance(APIManager, {
      getPrice: "100"
    })

    check = new Check(stubKeyManager, stubAPIManager);
  })
  afterEach(function() {
    sandbox.restore()
  })
      
  context('when passed a stock code', function() {
    it('returns the price of a stock', async function() {
      var result = await check.price('IBM')
      assert.strictEqual(result, "IBM Price: 100");
    })
  })

  context('when not passed a stock code', function() {
    it('returns an error', async function() {
      var result = await check.price()
      assert.strictEqual(result, 'Provide stock code with --code, -c <codes>')
    })
  })
})