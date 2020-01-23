/*
    JavaScript Exercise3
    Date
*/

let registration = new Date(2020,0,7,8,25);

console.log(registration);
console.log(`Year:${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Day of week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

registration.setFullYear(1999);
console.log(`${registration.toDateString()} ${registration.toTimeString()}`);

