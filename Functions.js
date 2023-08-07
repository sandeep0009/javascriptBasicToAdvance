/* 
function are set of blocks which are used to execute a particular code .
in javascript functions are of following type:
        1. function declartion
        2. Arrow function
        3. Immediately invoked function Expression(IIFE)
        4. Higher order function
        5. Recursive function
 */


    // function declartion example : they start with keyword function.
    function greet(){
        console.log("hi Good evening");
    }
    greet() //function calling

    //Arrow functions are use to write simplified code .they are useful for those function which don't require "this keyword"

    let greeting=()=>console.log("hi sandeep"); //curly bracket are not used because it have only one expression.
    greeting()

    let squr=(a,b)=>console.log(a*b);
    squr(5,4);

    let doub=(a,b)=>{
        let result=a*b;
        return(result);
    }
    console.log(doub(2,3));


    //example of IIFE : these are used to create private scope for the variable to avoid varaibales having lots of global vairables.
    /* (funciton (){
        ***code***
    }) */

    (function(){
        let gree="hii doomed world";
        console.log(gree);
    })();