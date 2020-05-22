const KeyManager = require('../lib/keyManager');
const inquirer = require('inquirer');

class Key {
    constructor(keyManager = new KeyManager()) {
        this.keyManager = keyManager
    }

    async set() {
        var input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key (https://www.alphavantage.co/)'
            }
        ]);

        const keyValue = this.keyManager.setKey(input.key);
        
        if (keyValue) {
            console.log('API key set.')
        } else {
            console.log('No API key given.')
        }
    }
}

module.exports = Key;