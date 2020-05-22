const assert = require('assert');
const sinon = require('sinon');
const inquirer = require('inquirer');
const key = require('../commands/key.js');
// const KeyManager = require('../lib/keyManager');


var sandbox = sinon.createSandbox();


describe('Key', function() {
    beforeEach(function() {
        sandbox.stub(console, 'log');
    });
    afterEach(function() {
        sandbox.restore();
    });
    describe('set', function() {
        context('When passed a value', function()  {
            beforeEach(function() {
                sandbox.stub(inquirer, 'prompt').callsFake(() => { return { key: '1234' } });
            });
            it('confirms the API key is set', async function() {
                var result = await key.set()
                assert.equal(console.log.calledOnce, true);
                assert.equal(console.log.calledWith('API key set.'), true);
            });
        });

        context('When not passed a value', function() {
            beforeEach(function() {
                sandbox.stub(inquirer, 'prompt').callsFake(() => { return { key: '' } });
              });
              it ('raises an error', async function() {
                var result = await key.set()
                assert.equal(console.log.calledOnce, true);
                assert.equal(console.log.calledWith('No API key given.'), true);
            });
        });
    });
});