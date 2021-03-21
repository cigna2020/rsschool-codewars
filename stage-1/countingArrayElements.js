/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john'])
#=> { 'james': 2, 'john': 1}
*/

function count(array) {
  return array.reduce((allElem, elem) => {
    if (elem in allElem) {
      allElem[elem]++;
    } else {
      allElem[elem] = 1;
    }
    return allElem
  }, {})
};

const arr = ['james', 'james', 'john'];

const test = count(arr);
console.log(test)
