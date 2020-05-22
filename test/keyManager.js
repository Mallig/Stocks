var assert = require('assert');
var sinon = require('sinon');

var keyManager = require('../lib/keyManager');
var Configstore  = require('configstore')

var sandbox = sinon.createSandbox();

// var stub = sinon.stub('Configstore', 'set()')


var subj = new keyManager()

describe('KeyManager', () => {
    afterEach(() => {
        sandbox.restore()
    });

    describe('setKey()', () => {
        it('sets the API key', () => {
            var stub = sandbox.createStubInstance(Configstore, {
                get: 'Fake-API-Key'
            })
            var subj = new keyManager(stub)
            assert.equal(subj.setKey('Fake-API-Key'), 'Fake-API-Key');
        });
    });

    describe('getKey()', () => {
        context('when key is set', () => {
            it('returns the key', () => {
                var stub = sandbox.createStubInstance(Configstore, {
                    get: 'Fake-API-Key'
                })
                var subj = new keyManager(stub)
                assert.equal(subj.getKey(), 'Fake-API-Key');
            });
        });

        context('when key is not set', () => {
            it('returns nothing', () => {
                var stub = sandbox.createStubInstance(Configstore, {
                    get: null
                })
                var subj = new keyManager(stub)
                assert.equal(subj.getKey(), null);
            });
        });
    });
});