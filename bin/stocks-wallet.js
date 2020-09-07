const program = require('commander');
const Wallet = require('../commands/Wallet');

const wallet = new Wallet()

program
  .action(() => { 
    var funds = wallet.check() 
    console.log(`£${funds}`)
  })

program
  .command('add')
  .description('add funds to wallet')
  .action((amount) => {
    console.log(amount.args)
  })  

program.parse(process.argv)