/* Variables are used to store data .they are like container which hold a value . 

In javascript there are three types of variable : 
    1. let     
    2. var 
    3. const 

*/

// example for let :
let a ="sandeep"
let b=5
console.log(a);
console.log(b);


//Example for const:
const c="mohan";
const d=5
console.log("name"+" "+c +" "+"number"+ " "+d);

//Example for var :
var m="lets"
var n=45;
console.log(m+ " "+ n);


/*Scope of variable is defined as where that variable is accessebile in your code and where not . 
    Scope of Following type :
    Global scope
    Function scope
    Block scope

    Global scope is defined as that variable is accessible globally in your code. 
    Function scope is define as that variable is accessible to that function out of that function it wont be accessible . 
    Block scope is defined as that variable is accessible to that particular block loop or funciton.

    !CAUTION => var is globally declare variable therefore always try to use let and const .
*/

var q="im global";
function myname(){
    let x="im function scope";
    console.log("x:" + " " +x);
    console.log("q:"+" " +q)
}
myname();

