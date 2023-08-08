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


//filter returns a new array which pass the condition provided

const arr1=[1,2,3,4,5,6]
const ar=arr.filter(arr1=>arr1%2==0)
console.log(ar);

//reduce reduces the array into single value
const a=[1,2,4,5,6];
const sum=a.reduce((acc,a)=>acc+a,0);
console.log(sum)

//forEach iterates over each element of array and applies to each element
const b=[1,2,3,4,5];
b.forEach(element => {
    console.log(element)
    
});