const assert = require('assert');
const sinon = require('sinon');
const API = require('../lib/API');

const dummyResponse = {
    price: "200"
}


describe('API', function() {
    describe('getPrice()', function() {
        it('returns stock price', async function() {
            var api = new API();
            var result = await api.getPrice('IBM');
            assert.equal(result, "100")
        })
    })
})