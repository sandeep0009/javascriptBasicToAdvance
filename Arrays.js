/* 
Arrays are collection of same data. example =>  let a=[1,2,3,4,5];
in javascript we can intialise an array in many ways :
        1. Using Array constructor .
        2. Creating array of certain size.

 */

        const a=[] //empty array intialise.
        const b= new Array(10)  //creating array of fixed size 10.


/* 
Operations on Array :
        1.Accessing Elements
        2.Adding Elements
        3.Removing Elements
        4.Combining Arrays (Concatination)
        5.Iterating through Array
        6.Searching and Filtering
        7.Sorting and Reverse
        

*/

let array=[1,2,4,5,3];

console.log(array[0]);    //accessing the elements

array.push(10);             //add elements at the end
console.log(array);

array.unshift(0);           //add the elements at the begining
console.log(array);

array.pop();        //remove the last element from array
console.log(array);

array.slice(2,4);   //do the slicing from starting index to n-1;
console.log(array);

let array1=[9,8]
console.log(array.concat(array1));  // adding the array1 in array.

console.log(array.indexOf(4));  //returns index of that element

array.sort();   //sorts array
console.log(array);

console.log(array.slice().reverse()); //reverse the array


