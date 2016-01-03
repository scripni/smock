'use strict';

var assert = require('assert');
var util = require('util');

class ModuleMock {
  constructor(name) {
    this.name = name;

    // class is abstract
    /* jshint ignore:start */
    assert.notEqual(new.target, ModuleMock,
      util.format('class %s is abstract', new.target.name));
    /* jshint ignore:end */
    // require subclasses to implement register
    assert.equal(typeof this.register, 'function');
  }
}

module.exports = ModuleMock;