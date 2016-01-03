'use strict';

var mockery = require('mockery');

class Mock {
  constructor(state) {
    this.state = state;
  }

  get state() {
    return this.state;
  }
}

module.exports = Mock;