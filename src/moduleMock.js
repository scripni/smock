'use strict';

var assert = require('assert');
var util = require('util');
var mockery = require('mockery');

class ModuleMock {
  constructor(name) {
    /* jshint ignore:start */
    this.className = new.target.name;

    // class is abstract
    assert.notEqual(new.target, ModuleMock,
      util.format('class %s is abstract', this.className));
    /* jshint ignore:end */

    this.name = name;
  }

  register() {
    assert.notStrictEqual(this.mocks, undefined,
      util.format('class %s must contain a mocks property', this.className));
    mockery.registerMock(this.name, this.mocks);
  }
}

module.exports = ModuleMock;