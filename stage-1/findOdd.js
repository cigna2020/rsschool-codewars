// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// https://www.codewars.com/kata/find-the-odd-int/

function findOdd(A) {
    let newStr = [];
    for (let i = 0; i < A.length; i++) {
        newStr = A.filter(num => num === A[i]);
        if (newStr.length % 2) return A[i]
    };
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))