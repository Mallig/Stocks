const readline = require('readline');

class InputManager {

  async takeKey() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    // return promise resolving to response from user
    return new Promise((resolve, reject) => {
      rl.question('Enter API Key (https://www.alphavantage.co/)', (answer) => {        
        rl.close()
        answer ? resolve(answer) : reject('No API key given')
      })
    })
  }

}

module.exports = InputManager