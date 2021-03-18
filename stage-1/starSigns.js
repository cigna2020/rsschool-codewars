/*
Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

    Test.assertEquals(starSign(new Date(1970, 5, 5)), 'Gemini');
    Test.assertEquals(starSign(new Date(2000, 1, 15)), 'Aquarius');
    Test.assertEquals(starSign(new Date(1987, 7, 23)), 'Leo');
*/


function starSign(date) {
  const day = date.getDate();
  const month = date.getMonth();

  if (month === 0 && day >= 21 || month === 1 && day <= 19) return 'Aquarius';
  if (month === 1 && day >= 20 || month === 2 && day <= 20) return 'Pisces';
  if (month === 2 && day >= 21 || month === 3 && day <= 20) return 'Aries';
  if (month === 3 && day >= 21 || month === 4 && day <= 21) return 'Taurus';
  if (month === 5 && day >= 22 || month === 6 && day <= 22) return 'Cancer';
  if (month === 4 && day >= 22 || month === 5 && day <= 21) return 'Gemini';
  if (month === 6 && day >= 23 || month === 7 && day <= 23) return 'Leo';
  if (month === 7 && day >= 24 || month === 8 && day <= 23) return 'Virgo';
  if (month === 8 && day >= 24 || month === 9 && day <= 23) return 'Libra';
  if (month === 9 && day >= 24 || month === 10 && day <= 22) return 'Scorpio';
  if (month === 10 && day >= 23 || month === 11 && day <= 21) return 'Sagittarius';
  if (month === 11 && day >= 22 || month === 0 && day <= 20) return 'Capricorn';
};

console.log(starSign(new Date(1987, 7, 23)));