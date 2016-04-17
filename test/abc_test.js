'use strict';

var expect    = require('chai').expect;
var converter = require('../index');

describe('ABC Converter', function() {
  it('converts', function() {
    var result = converter.abc('GkßrbBa©Úl (eGb‘ÍsuI)');

    expect(result).to.equal('អក្សរបពា្ចូល (អេប៊ីស៊ី)');
  });
});