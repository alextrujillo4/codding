// npm run test
const assert = require('assert');
const fib  = require('../dynamic_programming/recursive/fibonacci');

describe('Recursive Fibonacci', () => {
    it('should return 1', () => {
           assert.equal(fib(1), 1);
       });
    it('should return 1', () => {
           assert.equal(fib(2), 1);
       });
       it('should return 12586269025', () => {
        assert.equal(fib(50), 12586269025);
    });
   });

