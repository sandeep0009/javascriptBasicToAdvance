/* 
    Higher Order functions in javascript are those which take one or more fucnction as arguments and return a function.
    1. map
    2. filter
    3. reduce
    4. forEach
*/

// map is function apply to all the elements and returns a new array.

const arr=[1,2,3,4];
const square=arr.map(arr=>arr*arr);
console.log(square);