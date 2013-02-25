var _ = require('underscore');

/*
To be run with Node.js. Console logs at the end to test. Sections divided by ===s.
Comment and uncomment sections as necessary.
*/

// Maker ==================================================

// var makeWord = function(word) {
//   return {
//     word: word,
//     letters: 0,
//     addLetters: function(letter){
//       letters += letter;
//     }
//   };
// };


//Using shared methods with global function ================

var makeWord = function(word) {
  return {
    word: word,
    letters: word.length,
    addLetters: function(letter){
      this.letters += letter.length;
      this.word += letter;
      return this.word;
    },
    removeLetters: removeLetters
  };
};

var removeLetters = function(count) {
  this.letters -= count;
  this.word = this.word.slice(0, -count);
  return this.word;
};


// Namespace ==============================================

// var makeWord = function(word) {
//   return {
//     word: word,
//     letters: word.length,
//     addLetters: function(letter){
//       this.letters += letter.length;
//       this.word += letter;
//       return this.word;
//     },
//     removeLetters: letterMixin.removeLetters
//   };
// };

// var letterMixin = {};
// letterMixin.removeLetters = function(count) {
//   this.letters -= count;
//   this.word = this.word.slice(0, -count);
//   return this.word;
// };


// Namespace to the maker ===================================

// var makeWord = function(word) {
//   return {
//     word: word,
//     letters: word.length,
//     addLetters: function(letter){
//       this.letters += letter.length;
//       this.word += letter;
//       return this.word;
//     },
//     removeLetters: makeWord.letterMixin.removeLetters
//   };
// };

// makeWord.letterMixin = {};
// makeWord.letterMixin.removeLetters = function(count) {
//   this.letters -= count;
//   this.word = this.word.slice(0, -count);
//   return this.word;
// };


// using _.extend ===========================================

// var makeWord = function(word) {
//   var wordObj = {
//     word: word,
//     letters: word.length,
//     addLetters: function(letter){
//       this.letters += letter.length;
//       this.word += letter;
//       return this.word
//     }
//   }
//   _(wordObj).extend(letterMixin);
//   return wordObj
// }

// var letterMixin = {}
// letterMixin.removeLetters = function(count) {
//   this.letters -= count;
//   this.word = this.word.slice(0, -count)
//   return this.word
// };

// prototypical (Object.create) ============================

// var makeWord = function(word) {
//   wordObj = Object.create(letterMixin);
//   wordObj.word = word;
//   wordObj.letters = word.length;
//   wordObj.addLetters = function(letter){
//       this.letters += letter.length;
//       this.word += letter;
//       return this.word;
//   };
//   return wordObj;
// };

// var letterMixin = {};
// letterMixin.removeLetters = function(count) {
//   this.letters -= count;
//   this.word = this.word.slice(0, -count);
//   return this.word;
// };

var ted = makeWord('teddy');


// pseudo classical using "new" ===========================

// var Word = function(word) {
//   this.word = word;
//   this.letters = word.length;
//   this.addLetters = function(letter){
//     this.letters += letter.length;
//     this.word += letter;
//     return this.word;
//   };
// };

// Word.prototype.removeLetters = function(count) {
//   this.letters -= count;
//   this.word =this.word.slice(0, -count);
//   return this.word;
// };

// var ted = new Word('teddy');


console.log(ted);
ted.removeLetters(4);
ted.addLetters('heodore');
console.log(ted.word);
console.log(ted.letters);
