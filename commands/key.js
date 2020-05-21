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
        
        if (!input.key) {
            console.log(new Error('API Key value required'));
        }

        const keyValue = keyManager.setKey(input.key);
        

        console.log('API key set.')
    }
}

module.exports = key;