class Wallet {
  constructor(funds = 0) {
    this.funds = funds
  }

  check() {
    return this.funds
  }
}

module.exports = Wallet;