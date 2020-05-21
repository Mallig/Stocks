var assert = require('assert');
// var sinon = require('sinon');

var keyManager = require('../lib/keyManager');


// var stub = sinon.stub('Configstore', 'set()')

var subj = new keyManager()

describe('KeyManager', () => {
    describe('setKey()', () => {
        it('sets the API key', () => {
            assert.equal(subj.setKey('FAKE-KEY'), 'FAKE-KEY');
        });
    });
});