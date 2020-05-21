const assert = require('assert');
const sinon = require('sinon');
const inquirer = require('inquirer');
const key = require('../commands/key.js');
const KeyManager = require('../lib/keyManager');

var stub = sinon.stub(inquirer, 'prompt').callsFake(() => { return { key: '1234' } });
// var stub2 = sinon.stub(KeyManager, {
//     setKey: sinon.stub().returnsThis('1234')
//     //() => { return '1234' });
// });
var  stub2 = sinon.stub(console, 'log')

describe('Key', function() {
    describe('set', function() {
        context('When passed a value', function()  {
            it('confirms the API key is set', async function() {
                var result = await key.set()
                assert.equal(console.log.calledOnce, true);
                assert.equal(console.log.calledWith('API key set.'), true);
            });
        });
    });
});