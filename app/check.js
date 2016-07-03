"use strict";

/**
 * Check module
 * @module app/check
 */

/**
 * Represents a check
 * @constructor
 * @param {array} stringArray String array
 */
function Check ( stringArray ) {
  this.stringArray = stringArray;
}

/**
 * Unique array
 * @method
 * @return {array} Unique the elements of the array
 */
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

/**
 * Check if the string in the first element of the array contains all of the letters of the string
 * in the second element of the array
 * @method
 * @param  {integer} firstIndex  Index of the first element of the array
 * @param  {integer} secondIndex Index of the second element of the array
 * @return {boolean}             Result of the check
 */
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

  for ( j = 0; j < secondStringLength; j++ ) {
    for ( i = 0; i < firstStringLength; i++ ) {
      if ( secondString[ j ] == firstString[ i ] ) {
        k += 1;
        continue;
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
