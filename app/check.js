"use strict";

/**
 * Check module
 * @module app/check
 */

/**
 * Represents a check
 * @constructor
 * @param {array} stringArray Array
 */
function Check ( stringArray ) {
  this.stringArray = stringArray;
}

/**
 * Check if the string in the first element of the array contains all of the letters of the string
 * in the second element of the array
 * @method
 * @param  {integer} firstIndex  Index of the first element of the array
 * @param  {integer} secondIndex Index of the second element of the array
 * @return {boolean}             Result of the check
 */
Check.prototype.containsAllLetters = function( firstIndex, secondIndex ) {
  this.firstIndex = +firstIndex;
  this.secondIndex = +secondIndex;

  var firstString = this.stringArray[ firstIndex ].split(""),
    secondString = this.stringArray[ secondIndex ].split(""),
    firstStringLength = firstString.length,
    secondStringLength = secondString.length,
    i,
    j,
    k = 0;

  for ( j = 0; j < secondStringLength; j++ ) {
    for ( i = 0; i < firstStringLength; i++ ) {
      if ( secondString[ j ] == firstString[ i ] ) {
        k += 1;
        break;
      }
    }
  }

  return k == secondStringLength;
};

module.exports = Check;
