/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.

Test.assertEquals( validPass('1Username') , 'VALID' );
Test.assertEquals( validPass('123') , 'INVALID' );
Test.assertEquals( validPass('Username123!') , 'INVALID' );
Test.assertEquals( validPass('ThisPasswordIsTooLong1234') , 'INVALID' )
*/

function validPass(password) {
  if (/^(?:[a-z\d]*[a-z]\d[a-z\d]*$|[a-z\d]*\d[a-z][a-z\d]*$)/i.test(password) && password.length < 20 && password.length > 3) {
    return 'VALID'
  } else {
    return 'INVALID'
  }
};

console.log(validPass('Username123'))
console.log(validPass('ThisPasswordIsTooLong1234'))