const mySym =  Symbol("key1");

const user = {
    name: "Swayam",
    "full name": "Swayam Prasad Sahoo",
    age: 23,
    [mySym] : "myKey1",
    email: "Swayam710@gmail.com",
    isLoggedIn: false,
    lastLogins: ["Sun", "Mon"]
}

// task : take a symbol, add it to the keys of the object and print it.

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user["lastLogins"]);
// console.log(typeof user.mySym);
// console.log(user[mySym]);

user.email = "swayam@gpt.com"; //  we can edit the values of the keys inside the object
// Object.freeze(user); //  we use freeze method to 
user.email = "swayam@google.com";
// console.log(user);

user.greeting = function () {
    console.log("Hello Swayam");
}

user.greeting2 = function () {
    console.log(`Hello ${user["name"]}`);
    console.log(`Hello ${user.name}`);
    console.log(`Hello ${this["full name"]}`); // to access the current object and its keys
}

// console.log(user.greeting); // it gives the fn reference 
// console.log(user.greeting()); //  it give sthe function value

console.log(user.greeting2());






