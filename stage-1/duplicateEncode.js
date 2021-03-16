// https://www.codewars.com/kata/duplicate-encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
    str = word.toLowerCase();

    let newStr = '';
    let result = '';
    let char = '';
    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i);
        newStr = str.replace(char, '');
        if (!newStr.includes(char)) {
            result += '('
        } else {
            result += ')'
        }
    };
    return result;
};