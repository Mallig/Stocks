const program = require('commander');
const Check = require('../commands/check');

var check = new Check()

program
    .command('price')
    .description('Returns current stock price')
    .option('-c, --code <code>', 'stock to check')
    .action(async (cmd) => {
      var result = await check.price(cmd.code)
      console.log(result)
    });

program.parse(process.argv);