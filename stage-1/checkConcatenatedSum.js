function checkConcatenatedSum(originalNum, count) {

    const strOriginalNum = Math.abs(originalNum).toString();

    let result = []

    for (let i = 0; i < strOriginalNum.length; i++) {
        for (let y = 0; y < count; y++) {
            result.push(strOriginalNum[i])
        }
        result.push(' ')
    }

    result = result.join('').split(' ');
    console.log(result)
    checker = 0;
    result.forEach(el => {
        if (originalNum < 0) {
            checker -= +el
        } else {
            checker += +el
        }

    });
    return checker === originalNum;
};

console.log(checkConcatenatedSum(-2997, 3));

// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, 
// the result will be the original number.It turns out that 198 is the only number with this property.However, 
// the property can be generalized so that each digit is concatenated n times and then summed.

// original number = 2997, n = 3
// 2997 = 222 + 999 + 999 + 777 and here each digit is concatenated three times.

// original number = -2997, n = 3

//     - 2997 = -222 - 999 - 999 - 777 and here each digit is concatenated three times.