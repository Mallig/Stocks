const APIManager = require('../lib/API');
const KeyManager = require('../lib/keyManager');

class Check {
  constructor(keyManager = new KeyManager(), API = new APIManager(keyManager.getKey())) {
    this.api = API
  }

  async price(symbol) {
    try {
      if (!symbol) { throw 'Provide stock code with --code, -c <codes>' }

      var price = await this.api.getPrice(symbol);
      return `${symbol} Price: ${price}`
    } catch (err) {
      return err
    }
  }
}

module.exports = Check;