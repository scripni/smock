/* jshint -W117 */
'use strict';

var expect      = require('chai').expect,
    ModuleMock  = require('../src/moduleMock');

describe('ModuleMock', function() {
  describe('type definition', function() {
    it('is abstract', function() {
      expect(function() { new ModuleMock(); }).to.throw(Error);
    });
    it('has an abstract mocks property', function() {
      expect(function() { new ModuleMockChild('foo'); }).to.throw(Error);
      expect(function() { new ModuleMockChild('foo', {}); }).to.not.throw(Error);
    });
  });
});

class ModuleMockChild extends ModuleMock {
  constructor(name, mocks) {
    super(name, mocks);
  }
}
