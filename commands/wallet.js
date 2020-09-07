const WalletManager = require('../lib/walletManager')

class Wallet {
  constructor(walletManager = new WalletManager()) {
    this.walletManager = walletManager
  }

  check() {
    return this.walletManager.funds()
  }

  add(amount) {
    this.walletManager.add(amount)
  }
}

module.exports = Wallet;