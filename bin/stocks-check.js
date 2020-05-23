const program = require('commander');
const Check = require('../commands/check');

var check = new Check()

program
    .command('price')
    .description('Returns current stock price')
    .action(() => { check.price() });

program.parse(process.argv);