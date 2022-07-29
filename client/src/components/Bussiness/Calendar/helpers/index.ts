const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

export const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  Novermber: 10,
  December: 11,
};
export const MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novermber",
  "December",
];

export function areEqual(a: Date, b: Date) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isLeapYear(year: number) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function getDaysInMonth(date: Date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1;
  } else {
    return daysInMonth;
  }
}

export function getDayOfWeek(date: Date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(year: number, month: number) {
  const result: Date[][] = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;
  console.log("daysInMonth", daysInMonth);
  console.log("monthStartsOn", monthStartsOn);
  console.log(Math.ceil((daysInMonth + monthStartsOn) / DAYS_IN_WEEK));

  for (
    let i = 0;
    i < Math.ceil((daysInMonth + monthStartsOn) / DAYS_IN_WEEK);
    i++
  ) {
    //count week
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      //count days in week
      if (i === 0 && j < monthStartsOn) {
        const daysInPrevMonth = getDaysInMonth(new Date(year, month - 1));
        for (let k = 0; k < monthStartsOn; k++) {
          result[i][j++] = new Date(
            year,
            month - 1,
            daysInPrevMonth - monthStartsOn + k + 1
          );
        }
      } else if (day > daysInMonth) {
        console.log(day);
        console.log(j);
        const monthEndsOn = getDayOfWeek(new Date(year, month, daysInMonth));
        const qnty = DAYS_IN_WEEK - j - 1;
        for (let k = 0; k < qnty; k++) {
          result[i][j++] = new Date(year, month + 1, day - monthEndsOn);
        }
      }
      result[i][j] = new Date(year, month, day++);
    }
  }

  return result;
}
