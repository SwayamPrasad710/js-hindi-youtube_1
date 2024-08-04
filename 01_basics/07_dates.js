let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let myDay = new Date(2001, 11, 7, 5, 30);
// console.log(myDay.toDateString());
// console.log(myDay.toLocaleString());

let reqDate = new Date("07-12-2001");
// console.log(reqDate);
// console.log(reqDate.toLocaleString());
// console.log(reqDate.getTime());

let newDate = new Date();
console.log(newDate.getMonth() + 1); // coz month counting starts from 0.
console.log(newDate.getDay());


