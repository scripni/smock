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
      var incorrect = new ModuleMockIncorrect();
      expect(function() { incorrect.register(); }).to.throw(Error);
      var correct = new ModuleMockCorrect();
      expect(function() { correct.register(); }).to.not.throw(Error);
    });
  });
});

class ModuleMockIncorrect extends ModuleMock {
  constructor() {
    super('incorrect');
  }
}

class ModuleMockCorrect extends ModuleMock {
  constructor() {
    super('correct');
  }

  get mocks() {
    return {};
  }
}
