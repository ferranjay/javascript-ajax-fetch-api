// we use query selector this time instead of getElementById, as we gave it a class and not an id
// we want to listen for a click and then call a function which we will name getJokes
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // we need to get the number of jokes which has been entered into the field "number of jokes"
  // we create a variable called number and set it to document.querySelector
  // there is only 1 input so we can just put input... but just to be more specific we use [type="number"] (so it will just get the number value type)  .value
  const number = document.querySelector('input[type="number"]').value;

  // now that we have the number, we can prepare our xhr or AJAX request
  // create the object
  const xhr = new XMLHttpRequest();

  // we open the link which wil get the jokes
  // we want to use GET , and then the link
  // we want the amount of jokes as the input number (const number)
  // therefore we use backtics ` ` so we can use a template literal ${}
  // we set it to true as we want to make sure it is set to asynchronous
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  // what do we want to do when we get the data? therefore we use onload
  xhr.onload = function() {
  // we want to check if its a 200 status first, if its ok
    if(this.status === 200) {
  // if we log the below we get a json string, we want to make this an object that we can loop through
    //  const response = this.responseText;
  // we wrap the response text in JSON.parse function
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success') {
      // we want to loop through the "value" check format of API and how it is formatted in console log
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
      // nothing happens yet as we still need to imput the joke into an html element
      // this is where we refer to the .jokes ul class which was made in the index.html
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}




























// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const response = JSON.parse(this.responseText);
      
//       let output = '';

//       if(response.type === 'success') {
//         response.value.forEach(function(joke){
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += '<li>Something went wrong</li>';
//       }

//       document.querySelector('.jokes').innerHTML = output;
//     }
//   }

//   xhr.send();

//   e.preventDefault();
// }