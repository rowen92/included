var Check = require("../app/check");
var expect = require("chai" ).expect;

describe("first string", function() {
  it("should contains all of the letters of the second string", function() {
    var check = new Check([ "abcdefg", "cafc", "bvcs" ]);
    var result = check.containsAllLetters( "0", "1" );
    expect( result ).to.be.true;
  });

  it("should not contains all of the letters of the second string", function() {
    var check = new Check([ "abcdefg", "cafc", "bvcs" ]);
    var result = check.containsAllLetters( "1", "2" );
    expect( result ).to.be.false;
  });
});
