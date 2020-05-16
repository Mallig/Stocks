var assert = require('assert');
var key = require('../commands/key.js');

describe('Key', () => {
    describe('set', () => {
        it('prints a response', () => {
            assert.equal(key.set(), 'Hello from set!');
        });
    });
});