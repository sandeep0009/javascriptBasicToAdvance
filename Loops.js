/* 
Loops are those which are iterated continously and perform the task till condition is true.
in javascript following are loops which we can use :
            1. for
            2. while
            3. do while
            4. for..in
            5. for..of
 */

// examples of for :

for(i=0;i<5;i++)
{
    console.log(i);
}

// example for while it is used when we don't know for how many times we have to iterate

while(i<6)
{
    console.log(i);
    i++;
}

//example of do while in this loop iterate definitely one time:
let m=0;
do{
    console.log(m);
    m++;
}while(m<5);

//for..in is used to iterate through key in objects
const empl={
    id:"john",
    desi:"software-developer"

}

for(let key in empl){
    console.log(key + " :"+empl[key]);
}

//for..of is used to iterate through array.
let arr=[1,2,3,4,5];
for(let num of arr){
    console.log(num);
}