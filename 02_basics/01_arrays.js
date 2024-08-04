let arr = [1,2,3,4,5,6];
// console.log(arr);

// arr.unshift(9)
// arr.shift();
// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

let newArr = arr.join();
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A: ", arr);

const arr1 = arr.slice(1,3); // only the elements within the portion is shown and excluding the last index
console.log(arr1);
console.log("B: ", arr);

const arr2 = arr.splice(1,3); // here, the mentioned portion is eliminated from the array includeing the last index as well
console.log(arr2);
console.log("C: ", arr);







