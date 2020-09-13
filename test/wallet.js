const assert = require('assert');
const sinon = require('sinon');

const Wallet = require('../commands/wallet');
const WalletManager = require('../lib/walletManager');
const InputManager = require('../lib/inputManager')

const sandbox = sinon.createSandbox()

describe('Wallet', () => {
  var wallet
  var walletFunds

  beforeEach(() => {
    walletFunds = 500
    var payIn = 100
    var stubWalletManager = sandbox.createStubInstance(WalletManager, {
      funds: walletFunds,
      set: (walletFunds + payIn)
    });
    var stubInputManager = sandbox.createStubInstance(InputManager, {
      takeFundsAmount: payIn
    })
    wallet = new Wallet(stubWalletManager, stubInputManager)
  })

  describe('#check', () => {
    it('returns wallet funds', () => {
      assert.strictEqual(wallet.check(), walletFunds)
    })
  })

  describe('#add', () => {
    it('adds funds to the wallet returning the new total', async () => {
      result = await wallet.add()
      assert.strictEqual(result, '£' + 600)
    })
  })
})