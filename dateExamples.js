const dateToday = new Date();

console.log(`Today's date with time:  ${dateToday}`);

console.log(dateToday.getDate()); // Today's date of the month

console.log(dateToday.getDay());  // Day of the week numerically (Starts with Monday)

console.log(dateToday.getTime()); // Time in milliseconds

console.log(dateToday.toDateString()); // Return date as String

console.log(dateToday.toTimeString()); // Return time as String
