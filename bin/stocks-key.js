const program = require('commander');
const Key = require('../commands/key');

var key = new Key()

program
    .command('set')
    .description('Set API Key -- Get at https://www.alphavantage.co/')
    .action(() => { key.set() });

program
    .command('get')
    .description('get API Key')
    .action(() => { key.get() });

program.parse(process.argv);