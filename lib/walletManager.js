const Configstore = require('configstore')

class WalletManager {
  constructor(conf = new Configstore()) {
    this.conf = conf
  }

  funds() {
    return this.conf.get('wallet')
  }

  set(value) {
    return this.conf.set('wallet', value)
  }
}

module.exports = WalletManager;