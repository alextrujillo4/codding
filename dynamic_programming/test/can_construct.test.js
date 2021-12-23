// npm run test
const assert = require('assert');
const canConstruct  = require('../dynamic_programming/recursive/can_construct');

describe('Recursive Can Construct', () => {
    it('should return true', () => {
           assert.equal(canConstruct("ab",["ab","abc","cd","abcd"]), true);
       });
    it('should return false', () => {
        assert.equal(canConstruct("ad",["ab","abc","cd","abcd"]), false);
    });
    it('should return false', () => {
        assert.equal(canConstruct("abcde",["ab","abc","cd","abcd"]), false);
    });

    it('should return true', () => {
        assert.equal(canConstruct("abcdababcd",["ab","abc","cd","abcd"]), true);
    });

    it('should return true', () => {
        assert.equal(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eeef"]), true);
    });
   });

