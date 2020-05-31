const KeyManager = require('../lib/keyManager');
const InputManager = require('../lib/inputManager')

class Key {
  constructor(keyManager = new KeyManager(), inputManager = new InputManager()) {
    this.keyManager = keyManager
    this.inputManager = inputManager
  }
  
  async set() {
    var response

    try {
      response = await this.inputManager.takeKey()
      this.keyManager.setKey(response)
      return 'API key set.'
    } 
    catch {
      return 'No API key given.'
    }
  }

  get() {
    var apiKey = this.keyManager.getKey();
    return apiKey ? apiKey : 'No API Key set.'
  }
}

module.exports = Key;