"use strict";

var Check = require("./check");
var check = new Check([ "abcd", "bad", "three" ]);
console.log( check.containsAllLetters( "0", "1" ) );
