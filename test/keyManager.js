var assert = require('assert');
var keyManager = require('../lib/keyManager');

var subj = new keyManager()

describe('KeyManager', () => {
    describe('setKey()', () => {
        it('sets the API key', () => {
            assert.equal(subj.setKey('FAKE-KEY'), 'FAKE-KEY');
        });
    });
});