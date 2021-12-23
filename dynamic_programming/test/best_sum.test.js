const assert = require('assert');
const bestSum  = require('../recursive/best_sum');

describe('Recursive Best Sum', () => {
    it('should return [7]', () => {
        assert.deepEqual(bestSum(7,[5,3,4,7]), [7]);
    });

    it('should return 3,5]', () => {
        assert.deepEqual(bestSum(8,[2,3,5]), [5,3]);
    });

    it('should return [4,4]', () => {
        assert.deepEqual(bestSum(8,[1,4,5]), [4,4]);
    });

    it('should return [25,25,25,25]', () => {
        assert.deepEqual(bestSum(100,[1,2,5,25]), [25,25,25,25]);
    });
   });