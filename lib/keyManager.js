const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name)
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return this.conf.get('apiKey');
    }
}

module.exports = KeyManager;