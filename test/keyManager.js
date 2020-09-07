var assert = require('assert');
var sinon = require('sinon');

var KeyManager = require('../lib/keyManager');
var Configstore = require('configstore')

var sandbox = sinon.createSandbox();

describe('KeyManager', () => {
  var stub
  var keyManager
  
  afterEach(() => {
    sandbox.restore()
  });

  describe('setKey()', () => {
    it('sets the API key', () => {
      var stub = sandbox.createStubInstance(Configstore, {
        get: 'Fake-API-Key'
      })
      keyManager = new KeyManager(stub)
      assert.equal(keyManager.setKey('Fake-API-Key'), 'Fake-API-Key');
    });
  });

  describe('getKey()', () => {
    context('when key is set', () => {
      it('returns the key', () => {
        var stub = sandbox.createStubInstance(Configstore, {
          get: 'Fake-API-Key'
        })
        keyManager = new KeyManager(stub)
        assert.equal(keyManager.getKey(), 'Fake-API-Key');
      });
    });

    context('when key is not set', () => {
      it('returns nothing', () => {
        var stub = sandbox.createStubInstance(Configstore, {
          get: null
        })
        keyManager = new KeyManager(stub)
        assert.equal(keyManager.getKey(), null);
      });
    });
  });
});