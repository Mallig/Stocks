const APIManager = require('../lib/API');
const KeyManager = require('../lib/keyManager');

class Check {
    constructor(keyManager = new KeyManager(), API = new APIManager(keyManager.getKey())) {
        this.api = API
    }

    async price(symbol) {
        try {
            var price = await this.api.getPrice(symbol);
            var result = `${symbol} Price: ${price}`
            console.log(result)
        } catch {
            console.log('error')
        }
    }

}

module.exports = Check;