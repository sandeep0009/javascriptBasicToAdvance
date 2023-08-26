/* 
it is critical concept in javascript .its essential for handling operations that might take time such as fetching data from server or reading a file.
this is achieved through mechanisms like callbacks,promises and async/await.
 */


// callbacks are functions that are passed as arguments to other functions and are executed after a specific task complete.However this can lead to callback hell(nested callback).


function fetchdata(callback){
    setTimeout(() => {
        const data="fetch data";
        callback(data)
        
    }, 5);
}

fetchdata((result)=>{
    console.log(result)
})


// promises provide more structure way to handle asychronous operations.it represent value that might be available now or in future or possibly never.
// promise have three states :pending,fulfilled and rejected.
// they can be chained using .then() or .catch method.

function fetchdata(){
    return new Promise((resole,reject)=>{
        setTimeout(()=>{
            const data="Fetched Data"
            resole(data)
        },1000)
    })
}

fetchdata().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

/* 
Async/Await:
it is modern way to work with asynchornous operations.
'async' keyword is used to define asynchronous function and 'await' keyword is used inside the fucntion to pause the execution until a promise is resolved.
*/

async function fetchdata(){
    try{
        const result=await new Promsise((resolve)=>{
            setTimeout(()=>{
                resolve("fetch data")
            },1000)
        })
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

fetchdata()