// Get local text file data 

// 1
// get element by id and add an eventlistener
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// 2 make a function for getText above
function getText() {
// we use fetch , and pass in whatever we want to get test.txt
// fetch returns promises, if we get a response from a promise, you have to use .then
    fetch('test.txt')
    // 3 then we pass in a function with a response
        .then(function(res){
            return res.text();
        })
    // as the res.text returns a promise we have to use .then again
    // the promise returns data
        .then(function(data){
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
    // if there is some kind of error we can do .catch
        .catch(function(err){
            console.log(err);
        });
}

// the above can be written shorter with arrow functions

// function getText() {
//       fetch('test.txt')
//           .then(res => res.text())
//           .then(data => {
//               console.log(data);
//               document.getElementById('output').innerHTML = data;
//           })
//           .catch(err => console.log(err));
//   }


// Get local JSON data 
function getJson() {
    fetch('posts.json')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);
    // we want to output this stuff, and because its and array we have to loop through it 
    // so we say let output = ''
    let output = '';
        data.forEach(function(post) {
    // we want to append so we use +=
          output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(function(err){
        console.log(err);
      });
  }





// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}