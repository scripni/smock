/* jshint -W117 */
'use strict';

var expect  = require('chai').expect,
    Mock    = require('../src/mock');

describe('Mock', function() {
  describe('type definition', function() {
    it('is abstract', function() {
      expect(Mock).to.throw(Error);
    });
  });
});