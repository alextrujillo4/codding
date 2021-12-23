// npm run test
const assert = require('assert');
const expect = require('expect');

const howSum  = require('../dynamic_programming/recursive/how_sum');

describe('Recursive How Sum', () => {
    it('should return [3,2,2]', () => {
           assert.deepEqual(howSum(7,[2,3]), [3,2,2]);
    });

    it('should return null', () => {
        assert.equal(howSum(7,[2,4]), null);
    });

    it('should return null', () => {
        assert.equal(howSum(300,[7,14]), null);
    });

});

