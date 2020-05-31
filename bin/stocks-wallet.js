const program = require('commander');

program
  .action(() => { console.log('hello from wallet') })

program.parse(process.argv)