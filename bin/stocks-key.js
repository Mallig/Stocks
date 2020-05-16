const program = require('commander');

program
    .command('set')
    .description('Set API Key -- Get at https://www.alphavantage.co/')
    .action(() => console.log('Hello fom Key Set!'))

program.parse(process.argv)