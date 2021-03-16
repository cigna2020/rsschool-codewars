function squares(x, n) {

    let result = [];

    if (n <= 0) return result;

    for (let i = 0; i < n; i++) {
        result.push(x);
        x *= x;
    }

    return result;
};

console.log(squares(3, 3))

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number.
// If n is negative or zero, return an empty array / list.

//     Examples
// 2, 5  -- > [2, 4, 16, 256, 65536]
// 3, 3  -- > [3, 9, 81]