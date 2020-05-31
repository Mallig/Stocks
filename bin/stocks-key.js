const program = require('commander');
const Key = require('../commands/key');

var key = new Key()

program
    .command('set')
    .description('Set API Key -- Get at https://www.alphavantage.co/')
    .action(async () => { 
      var result = await key.set()
      console.log(result)  
    });

program
    .command('get')
    .description('get API Key')
    .action(() => {
      var result = key.get()
      console.log(result)
    });

program.parse(process.argv);