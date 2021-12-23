// npm run test
const assert = require('assert');
const canSum  = require('../dynamic_programming/recursive/can_sum');

describe('Recursive Can Sum', () => {
    it('should return true', () => {
           assert.equal(canSum(7,[2,3]), true);
       });
    it('should return true', () => {
        assert.equal(canSum(7,[5,3,4,7]), true);
    });
    it('should return false', () => {
        assert.equal(canSum(7,[4,2]), false);
    });

    it('should return false', () => {
        assert.equal(canSum(300,[7,14]), false);
    });
   });

