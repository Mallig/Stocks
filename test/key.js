const assert = require('assert');
const sinon = require('sinon');
const inquirer = require('inquirer');

const Key = require('../commands/key.js');
const KeyManager = require('../lib/keyManager');

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
                var stub = sandbox.createStubInstance(KeyManager, {
                    setKey: '1234'
                });
                var key = new Key(stub)
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
                var stub = sandbox.createStubInstance(KeyManager, {
                    setKey: ''
                });
                var key = new Key(stub)
                var result = await key.set()
                assert.equal(console.log.calledOnce, true);
                assert.equal(console.log.calledWith('No API key given.'), true);
            });
        });
    });

    describe('get', function() {
        context('when API key has been set', function() {
            it('returns the key', async function() {
                var stub = sandbox.createStubInstance(KeyManager, {
                    getKey: 'Fake-API-Key'
                });                
                var key = new Key(stub);
                var result = await key.get();
                assert.equal(console.log.calledOnce, true);
                assert.equal(console.log.calledWith('Fake-API-Key'), true);
            });
        });

        context('when API key has not been set', function() {
            it('tells the user the key isn\'t set', async function() {
                var stub = sandbox.createStubInstance(KeyManager, {
                    getKey: null
                }); 
                var key = new Key(stub);
                var result = await key.get();
                assert.equal(console.log.calledOnce, true);
                assert.equal(console.log.calledWith('No API Key set.'), true);
            });
        });
    });
});