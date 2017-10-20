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
    return word.toLowerCase().replace(' ', '').split('').sort().join('');
};
