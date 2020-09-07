const assert = require('assert');
const sinon = require('sinon');

const Configstore = require('configstore');

const WalletManager = require('../lib/walletManager');
const sandbox = sinon.createSandbox()

describe('WalletManager', () => {
  describe('#funds', () => {
    it('returns the wallet funds', () => {
      var stub = sandbox.createStubInstance(Configstore, {
        get: 100
      })
      var walletManager = new WalletManager(stub)
      var result = walletManager.funds()

      assert.equal(result, 100)
    })
  })
})