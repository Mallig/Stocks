const assert = require('assert');
const sinon = require('sinon');

const Check = require('../commands/check')

describe('price', function() {
    it('returns the price of a stock', async function() {
        var check = new Check();
        var result = await check.price('IBM')
        assert.equal(result, "100");
    })
})