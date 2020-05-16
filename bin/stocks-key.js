const program = require('commander');
const key = require('../commands/key');

program
    .command('set')
    .description('Set API Key -- Get at https://www.alphavantage.co/')
    .action(() => console.log(key.set()));

program.parse(process.argv);