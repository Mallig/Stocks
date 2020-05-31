const assert = require('assert');

const Wallet = require('../commands/wallet');

describe('Wallet', () => {
  describe('#check', () => {
    it('returns wallet funds', () => {
      var wallet = new Wallet()
      result = wallet.check()
      
      assert.equal(result, 0)
    })
  })
})