var assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return index of first matching value in array', function() {
            assert.equal([1,2,3,2,1].indexOf(2), 1);
        });
    });
});