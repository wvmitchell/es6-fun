/*
 *
 * anagramChecker
 *
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var anagramChecker = exports.anagramChecker = function anagramChecker(wordOne, wordTwo) {
    return clean(wordOne) === clean(wordTwo);
};

var clean = function clean(word) {
    var loweredWord = word.toLowerCase()
    var spacelessWord = loweredWord.replace(' ', '')
    var arrayOfLetters = spacelessWord.split('')
    var sortedArray = arrayOfLetters.sort()
    return sortedArray.join('')
};
