const marvel_heroes = ["Thor", "Ironman", "Cap America"];
const dc_heroes = ["superman", "batman", "joker"];

// marvel_heroes.push(dc_heroes); // array within another array
// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes); // the concat method returns the result as an array, so we have to store the result in a new array. 
// console.log(all_heroes); 


const marvel_heroes2 = ["Hulk", "Loki", "Spiderman"];
const dc_heroes2 = ["flash", "aquaman", " black adam"];

const new_heroes = [...marvel_heroes2, ...dc_heroes2]; // spread methods -> it separates all the words from the arrays and stores them as single words.
// console.log(new_heroes);

const nums = [1,2,3,[4,5,6], 7, [8,9,[10, 0, 1, 2]]];
const flat_nums = nums.flat(Infinity); // it sepates all the nested arrays and represents them in a single format.
// console.log(flat_nums);

// console.log(Array.isArray("Swayam")); // checks if the given value is an array or not.
// console.log(Array.from("Swayam"));
// console.log(Array.from({name: "Swayam"})); 
// *** here the method is unable to convert the OBJECT value into an ARRAY. hence it return an empty array.

let n1 = 100;
let n2 = 200;
let n3 = 300;
  
console.log(Array.of(n1, n2, n3)); // it takes the input elements and makes an array out of them.



