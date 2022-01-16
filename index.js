// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

// Examples

// leapYear(2020) ➞ true

// leapYear(2021) ➞ false

// leapYear(1968) ➞ true

function leapYear(year) {
  if (year % 4 == 0) console.log(true);
  else console.log(false);
}
leapYear(2021);
