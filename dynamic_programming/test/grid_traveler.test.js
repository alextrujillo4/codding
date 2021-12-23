// npm run test
const assert = require('assert');
const gridTraveler  = require('../dynamic_programming/recursive/grid_traveler.js');

describe('Recursive Grid Traveler', () => {
    it('should return 1', () => {
           assert.equal(gridTraveler(1,1), 1);
       });
    it('should return 3', () => {
           assert.equal(gridTraveler(2,3), 3);
       });
    it('should return 6', () => {
        assert.equal(gridTraveler(3,3), 6);
    });
    it('should return 2333606220', () => {
        assert.equal(gridTraveler(18,18), 2333606220);
    });
   });

