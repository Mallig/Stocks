const WalletManager = require('../lib/walletManager')
const InputManager = require('../lib/inputManager')

class Wallet {
  constructor(walletManager = new WalletManager(), inputManager = new InputManager()) {
    this.walletManager = walletManager
    this.inputManager = inputManager
  }

  check() {
    return this.walletManager.funds()
  }

  async add() {
    var response
    var currentFunds = this.check()

    try {
      while (!parseInt(response, 10)) {
        response = await this.inputManager.takeFundsAmount()
      }
      var newFunds = (+currentFunds) + (+response)
      this.walletManager.set(newFunds)
      return '£' + newFunds
    } 
    catch {
      return `No value given, current funds: £${currentFunds}`
    }
  }
}

module.exports = Wallet;