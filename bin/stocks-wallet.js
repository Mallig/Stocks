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
  .option('-a, --amount <amount>', 'add funds')
  .action(async () => {
    var result = await wallet.add()
    console.log(result)
  })  

program.parse(process.argv)