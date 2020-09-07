const Configstore = require('configstore')

class WalletManager {
  constructor(conf = new Configstore()) {
    this.conf = conf
  }

  funds() {
    return this.conf.get('wallet')
  }
}

module.exports = WalletManager;