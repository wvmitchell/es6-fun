/*
 *
 * palindromeChecker
 *
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var palindromeChecker = exports.palindromeChecker = function palindromeChecker(word) {
  return clean(word) === reverse(clean(word));
};

var reverse = function reverse(word) {
  var letters = word.split('');
  var reversedLetters = [];
  letters.forEach(function (letter) {
    reversedLetters.unshift(letter);
  });
  return reversedLetters.join('');
};

var clean = function clean(word) {
  return word.replace(' ', '').toLowerCase();
};
