/*
Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000)
  // returns "8/13/1999 10/13/2000"

fridayTheThirteenths(2014, 2015)
  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"

fridayTheThirteenths(2000)
  // returns "10/13/2000"

Test.assertEquals(fridayTheThirteenths(1999, 2000), "8/13/1999 10/13/2000");
Test.assertEquals(fridayTheThirteenths(2000), "10/13/2000");
  */



function fridayTheThirteenths(start, end) {
  end === undefined ? end = start + 1 : end += 1;

  const startYear = new Date(String(start));
  const endYear = new Date(String(end));
  let result = '';

  while (startYear < endYear) {
    if (startYear.getDay() === 5 && startYear.getDate() === 13) {
      result += (startYear.getMonth() + 1) + '/' + startYear.getDate() + '/' + startYear.getFullYear() + " ";
    }
    startYear.setDate(startYear.getDate() + 1);
  }

  return result;
};

console.log(fridayTheThirteenths(1999, 2000));