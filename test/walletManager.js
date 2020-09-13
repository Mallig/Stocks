const assert = require('assert');
const sinon = require('sinon');

const Configstore = require('configstore');

const WalletManager = require('../lib/walletManager');
const sandbox = sinon.createSandbox()

describe('WalletManager', () => {
  var walletManager
  var walletValue = 100

  afterEach(() => {
    sandbox.restore()
  });

  describe('#funds', () => {
    it('returns the wallet funds', () => {
      var stub = sandbox.createStubInstance(Configstore, {
        get: walletValue
      })
      walletManager = new WalletManager(stub)
      var result = walletManager.funds()

      assert.strictEqual(result, walletValue)
    })
  })

  describe('#set', () => {
    it('sets the wallet amount', () => {
      var stub = sandbox.createStubInstance(Configstore, {
        set: walletValue
      })
      walletManager = new WalletManager(stub)
      var result = walletManager.set(walletValue)

      assert.strictEqual(result, walletValue)
    });
  });
})