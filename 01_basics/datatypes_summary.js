/* Primitive DataType: 
    7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const id = Symbol('123');
const myId = Symbol('123');

// console.log(id == myId);
// console.log(id === myId);

const bigNumber = 96257473465346517n; // just write n at the end

/* Reference Type (Non Primitive): typeOf -> all are OBJECT except function -> i.e. OBJECT FUNCTION
    Array, objects: (key value pairs), functions
*/

let hero = ["Stark", "Steve", "Thor"];
console.log(typeof hero);

// typeOf(null) -> object
// typeOf(function_name) -> function = object function