/* jshint -W117 */
'use strict';

var expect      = require('chai').expect,
    ModuleMock  = require('../src/moduleMock');

describe('ModuleMock', function() {
  describe('type definition', function() {
    it('is abstract', function() {
      expect(function() { new ModuleMock(); }).to.throw(Error);
    });
    it('has an abstract register method', function() {
      expect(function() { new ModuleMockIncorrect(); }).to.throw(Error);
      expect(function() { new ModuleMockCorrect(); }).to.not.throw(Error);
    });
  });
});

class ModuleMockIncorrect extends ModuleMock {
  // does not implement a 'register' method
}

class ModuleMockCorrect extends ModuleMock {
  register() {

  }
}