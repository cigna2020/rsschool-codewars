/*
Given a mixed array of number and string representations of integers,
add up the string integers and subtract this from the total
of the non-string integers.
Return as a number.

divCon([9, 3, '7', '3']), 2
*/

function divCon(x) {
    let xNum = 0;
    let xStr = 0;
    x.forEach(el => {
        if (typeof (el) === 'string') {
            xStr += +el;
        } else {
            xNum += el;
        }
    });
    return xNum - xStr;
};

console.log(divCon([9, 3, '7', '3']))