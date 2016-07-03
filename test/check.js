var Check = require("../app/check");
var expect = require("chai" ).expect;

describe("array", function() {
  it("should be unique", function() {
    var array = [ "a", "b", "b", "b", "a", "c" ];
    result = array.unique();
    expect( result ).to.eql([ "a", "b", "c" ]);
  });

  it("should not be unique", function() {
    var array = [ "a", "b", "b", "b", "a", "c" ];
    result = array.unique();
    expect( result ).to.not.eql([ "a", "b", "b", "b", "a", "c" ]);
  });
});

describe("first string", function() {
  it("should contains all of the letters of the second string", function() {
    var check = new Check([ "abcdefg", "cafc", "bvcs" ]);
    var result = check.containsAllLetters( 0, 1 );
    expect( result ).to.be.true;
  });

  it("should not contains all of the letters of the second string", function() {
    var check = new Check([ "abcdefg", "cafc", "bvcs" ]);
    var result = check.containsAllLetters( 1, 2 );
    expect( result ).to.be.false;
  });
});
