const assert = require('assert');
const problem  = require('../problem.js');

describe('Problem Test', () => {

    it('should return 49', () => {
        assert.deepEqual(problem([1,8,6,2,5,4,8,3,7]), 49);
    });

    it('should return 1', () => {
        assert.deepEqual(problem([1,1]), 1);
    });
    

    it('should return 2', () => {
        assert.deepEqual(problem([1,2,1]), 2);
    });
    

    it('should return 20', () => {
        assert.deepEqual(problem([3,2,5,4,1,5,8]), 20);
    });

    it('should return 17', () => {
        assert.deepEqual(problem([2,3,4,5,18,17,6]), 17);
    });

    
    
   });