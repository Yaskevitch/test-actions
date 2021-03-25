const sum = require('../math');
const assert = require('assert');

describe('Math', function () {
    describe('sum', function () {
        it('should sum 3 and 0', function () {
            let actual = sum(3, 0);

            assert.strictEqual(actual, 3);
        });
        
        it('should sum 1 and 2', function () {
            let actual = sum(1, 2);

            assert.strictEqual(actual, 3);
        });
        
        it('should sum "12" and 7', function () {
            let actual = sum('12', 7);

            assert.strictEqual(actual, 19);
        });
    });
    
});
