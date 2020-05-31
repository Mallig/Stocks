const assert = require('assert');
const sinon = require('sinon');

const Key = require('../commands/key.js');

// dependencies to mock
const KeyManager = require('../lib/keyManager');
const InputManager = require('../lib/inputManager');

var sandbox = sinon.createSandbox();

describe('Key', function () {
  beforeEach(function () {
    sandbox.stub(console, 'log');
  });
  afterEach(function () {
    sandbox.restore();
  });

  describe('set', function () {
    context('When passed a value', function () {
      it('confirms the API key is set', async function () {
        var stubKeyManager = sandbox.createStubInstance(KeyManager, {
          setKey: '1234'
        });
        var stubInputManager = sandbox.createStubInstance(InputManager, {
          takeKey: '1234'
        });

        var key = new Key(stubKeyManager, stubInputManager)
        var result = await key.set()
        assert.equal(result, 'API key set.');
      });
    });

    context('When not passed a value', function () {
      it('informs the user the key was not set', async function () {
        var stubKeyManager = sandbox.createStubInstance(KeyManager, {
          setKey: null
        });
        var stubInputManager = sandbox.createStubInstance(InputManager);
        stubInputManager.takeKey.rejects()

        var key = new Key(stubKeyManager, stubInputManager)
        var result = await key.set()
        assert.equal(result, 'No API key given.');
      });
    });
  });

  describe('get', function () {
    context('when API key has been set', function () {
      it('returns the key', async function () {
        var stub = sandbox.createStubInstance(KeyManager, {
          getKey: 'Fake-API-Key'
        });

        var key = new Key(stub);
        var result = await key.get();
        assert.equal(result, 'Fake-API-Key');
      });
    });

    context('when API key has not been set', function () {
      it('tells the user the key isn\'t set', async function () {
        var stub = sandbox.createStubInstance(KeyManager, {
          getKey: null
        });

        var key = new Key(stub);
        var result = await key.get();
        assert.equal(result, 'No API Key set.');
      });
    });
  });
});