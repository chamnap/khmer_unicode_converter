'use strict';

var limon = require('./limon');
var abc   = require('./abc');

module.exports = {
  limon: function(string) {
    return limon(string);
  },

  abc: function(string) {
    return abc(string);
  }
};