const KeyManager = require('../lib/keyManager');
const inquirer = require('inquirer');

const key = {

    async set() {

        const keyManager = new KeyManager();

        var input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key (https://www.alphavantage.co/)'
            }
        ]);
        
        const keyValue = keyManager.setKey(input.key);
        
        if (keyValue) {
            console.log('API key set.')
        } else {
            console.log('No API key given.')
        }
    }
}

module.exports = key;