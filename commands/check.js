const APIManager = require('../lib/API');
const KeyManager = require('../lib/keyManager');

class Check {
    constructor(keyManager = new KeyManager(), API = new APIManager(keyManager.getKey())) {
        this.api = API
    }

    async price(symbol) {
        try {
            var price = await this.api.getPrice(symbol);
            console.log(price)
        } catch {
            console.log('error')
        }
    }

}

module.exports = Check;