// if we add async before the function it will return a promise

// async function myFunction() {
//     // if we do something asynchronous in this function
//     // we can use await untill it is resolved
//     const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 1000);
//     });

//     const res = await promise;  // wait until the promise is resolved
//     return res;
// }

// // console.log(myFunction());
// // instead of doing the console log above we can now do the below

// myFunction()
//     // .then as its now returning a promise
//     // pass in res for response and console.log the response
//     .then(res => console.log(res));

async function getUsers(){
    // we want to create a variable 
    // set it to await fetch and pass in the url
    // we await the rsponse of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resolved
    const data = await response.json();
    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));