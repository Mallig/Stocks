const program = require('commander');
const Check = require('../commands/check');


var check = new Check()

program
    .command('price')
    .description('Returns current stock price')
    .option('--code <code>')
    .action(cmd => check.price(cmd.code));

program.parse(process.argv);