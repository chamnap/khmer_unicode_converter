'use strict';

var expect    = require('chai').expect;
var converter = require('../index');

describe('Limon Converter', function() {
  it('converts', function() {
    var result = converter.limon('GkSrbBa©Úl ¬lIm:Un¦');

    expect(result).to.equal('អក្សរបពា្ចូល (លីម៉ូន)');
  });

  it('returns nothing', function() {
    var result = converter.abc(null);

    expect(result).to.equal(null);
  });
});