// const user = new Object(); ---> Object Literal
// const user = {}; ---> Object Singleton

const user1 = {};

user1.id = "Swayam1223";
user1.name = "Swayam";
user1.age = 23;

// console.log(user1);

// const user2 = {
//     id: "Swayam123",
//     fullName : {
//         userName: {
//             fName: "Swayam",
//             mName: "Prasad",
//             lName: "Sahoo"
//         }
//     }
// }


// console.log(user2.fullName);
// console.log(user2.fullName.userName);
// console.log(user2.fullName.userName.mName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}; // least prefered one = two objects inside the parent object. It doesn't combine them
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2); // we used the empty {}: which acts as the TARGET and rest of the objects as SOURCES. All the sources are saved into the target then the combined values ar assigned to obj3{}.
// console.log(obj3);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // Most Prefered One


// HOW THE DATA IS RECEIVED FROM DATABASE
const userDB = [
    {
        name: "Swayam",
        age: 23,
        isLoggedIn: false
    },
    {
        name: "Ankur",
        age: 22,
        isLoggedIn: false
    },
    {
        name: "Aman",
        age: 22,
        isLoggedIn: true
    }
]

userDB[1].name; 

// The data from DB is acquired in the */ form of an array /* in which multiple objects values are stored. we can access those values as we access an array element.

// console.log(user1);

// MOST IMPORTANT AND WIDELY USED METHOD
// console.log(Object.keys(user1)); // shows what are the keys
// console.log(Object.values(user1)); // shows what are the values of the respective keys
// console.log(Object.entries(user1)); //---> returns the key value pairs in the form of array.

// ---> we can access all the values in the form of array


console.log(user1.hasOwnProperty('name'));
console.log(user1.hasOwnProperty('name2')); // to check if it is +nst or not (like contains() in java)



