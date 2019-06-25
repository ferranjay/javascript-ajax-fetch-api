// we have an eventlistener , when clicked it calls the function loadData which we made
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.v1.txt', true);
    // we want async so we say true 

    // optional - used for spinners/loaders
    // xhr.onprogress = function(){
    // console.log('READYSTATE', xhr.readyState);
    

    xhr.onload = function(){
        if(this.status === 200) {
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // add an error handler just in case something goes wrong
    xhr.onerror = function() {
        console.log('request error...');
    }

    xhr.send();

}

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not found"





// 1.   we have an eventlistener , when clicked it calls the function loadData which we made
// 2.   we create a new instance xhr 
// 3.   we call the dot open and we type in the type of request (GET which means you want to read the file)
//      data.txt is what we are reading in, 
// 4.   when everything is ready it will call the .onload function and we want to make sure its a status of 200 
//      which means its ok
// 5.   console.log the response text
// 6.   finally send to make it work
// 7.   if it works (check with console.log) we can implement de data any way we want
//      within the onload function ... we can put a variable in there with ${} ..... ${this.responseText}