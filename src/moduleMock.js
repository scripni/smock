'use strict';

var assert = require('assert');
var util = require('util');
var mockery = require('mockery');

class ModuleMock {
  constructor(name, mocks) {
    /* jshint ignore:start */
    this.className = new.target.name;

    // class is abstract
    assert.notEqual(new.target, ModuleMock,
      util.format('class %s is abstract', this.className));
    /* jshint ignore:end */


    assert.notStrictEqual(name, undefined,
      util.format('name required', this.className));
    assert.notStrictEqual(mocks, undefined,
      util.format('mocks required', this.className));
    this.name = name;
    this.mocks = mocks;
  }

  register() {
    mockery.registerMock(this.name, this.mocks);
  }
}

module.exports = ModuleMock;