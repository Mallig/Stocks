const assert = require('assert');
const sinon = require('sinon');

const Check = require('../commands/check')
const KeyManager = require('../lib/keyManager')
const APIManager = require('../lib/API')

var sandbox = sinon.createSandbox()

describe('price', function() {
    beforeEach(function() {
        sandbox.stub(console, 'log');
    })
    afterEach(function() {
        sandbox.restore()
    })

    it('returns the price of a stock', async function() {
        var stubKeyManager = sandbox.createStubInstance(KeyManager, {
            getKey: '1234'
        });
        var stubAPIManager = sandbox.createStubInstance(APIManager, {
            getPrice: "100"
        })
        
        var check = new Check(stubKeyManager, stubAPIManager);
        await check.price('IBM')
        assert.equal(console.log.calledOnce, true);
        assert.equal(console.log.calledWith("100"), true)
    })
})