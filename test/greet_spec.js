var expect = require('chai').expect;
var greet = require('greet');

describe('greet', function() {
  it('is a dummy sucess case', function() {
    expect(1).to.eql(1);
  });

  it('should greet a person by name', function() {
    expect(greet('howard')).to.eql('hello, howard');
  });

  it('should greet a person flirtatiously if drunk', function() {
    expect(greet('howard', true)).to.eql('hello, howard, you look sexy today');
  });
});
