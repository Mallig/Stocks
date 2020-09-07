const assert = require('assert');
const sinon = require('sinon');

const Wallet = require('../commands/wallet');
const WalletManager = require('../lib/walletManager');

const sandbox = sinon.createSandbox()

describe('Wallet', () => {
  var wallet
  var walletFunds

  beforeEach(() => {
    walletFunds = 500
    const stub = sandbox.createStubInstance(WalletManager, {
      funds: walletFunds
    });
    wallet = new Wallet(stub)
  })

  describe('#check', () => {
    it('returns wallet funds', () => {
      assert.equal(wallet.check(), walletFunds)
    })
  })

  // describe('#add', () => {
  //   it('adds funds to the wallet', () => {
  //     var wallet = new Wallet()
  //     result = wallet.add(100)

  //     assert.equal(result, 100)
  //   })
  // })
})