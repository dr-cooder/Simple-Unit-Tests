const config = require('../test_config.js');
const utils = require('../../src/utils');

const { limits } = config;

describe('utils', () => {
  describe('add', () => {
    it('should return the addition of two numbers', (done) => {
      const sum = utils.add(5, 10);
      sum.should.equal(15);
      done();
    });

    it('should clamp the numbers to the minimum', (done) => {
      const sum = utils.add(limits.MIN - 100, 1);
      sum.should.equal(limits.MIN);
      done();
    });

    it('should clamp the numbers to the maximum', (done) => {
      const sum = utils.add(limits.MAX, 1);
      sum.should.equal(limits.MAX);
      done();
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', (done) => {
      const diff = utils.sub(10, 5);
      diff.should.equal(5);
      done();
    });
  });
});
