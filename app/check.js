"use strict";

function Check ( stringArray ) {
  this.stringArray = stringArray;
}

Array.prototype.unique = function() {
  var obj = {},
    arrayLength = this.length,
    uniqueArray = [];

  for ( var i = 0; i < arrayLength; i++ ) {
    obj[ this[ i ] ] = this[ i ];
  }

  for ( i in obj ) {
    uniqueArray.push( obj[ i ] );
  }

  return uniqueArray;
};

Check.prototype.containsAllLetters = function( firstIndex, secondIndex ) {
  this.firstIndex = firstIndex;
  this.secondIndex = secondIndex;
  var firstString = this.stringArray[ firstIndex ].split("").unique(),
    secondString = this.stringArray[ secondIndex ].split("").unique();
  var firstStringLength = firstString.length,
    secondStringLength = secondString.length,
    i,
    j,
    k = 0;

  for ( i = 0; i < secondStringLength; i++ ) {
    for ( j = 0; j < firstStringLength; j++ ) {
      if ( secondString[ i ] == firstString[ j ] ) {
        k += 1;
      }
    }
  }

  if ( k == secondStringLength ) {
    return true;
  } else {
    return false;
  }

};

module.exports = Check;
