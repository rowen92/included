"use strict";

var Check = require("./check");
var check = new Check([ "oen1d", "1one", "three" ]);
console.log( check.containsAllLetters( 0, 1 ) );
