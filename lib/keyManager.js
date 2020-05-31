const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
  constructor(conf = new Configstore(pkg.name)) {
    this.conf = conf
  }

  setKey(key) {
    this.conf.set('apiKey', key);
    return this.getKey();
  }

  getKey() {
    return this.conf.get('apiKey');
  }
}

module.exports = KeyManager;