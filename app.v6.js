function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request

easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  // we make a new variable in order to use the scope below
  // since we are not using => arrow functions
  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    // We also want to send back an error when there is something wrong
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}



// Make an HTTP POST Request

easyHTTP.prototype.post = function(url, data, callback){
  // 1
  this.http.open('POST', url, true);
  // 3
  // in addition to the onload, we need to set content type and this is done in the http header
  this.http.setRequestHeader('Content-type', 'application/json');
  // 4
  // 
  let self = this;

  this.http.onload = function() {
  // we dont need to check the status, because we are doing a post request
  // the response text should be the new post that we added and the way we check this is it should have the id of 101
      callback(null, self.http.responseText);
    }
  // 2
  // when you are sending data it will be regular javascript object
  // when we pass it in, so wwe need to run it through a function called 
  // JSON.stringify and send it as a JSON string
  this.http.send(JSON.stringify(data));
}



// Make an HTTP PUT Request

easyHTTP.prototype.put = function(url, data, callback){
  // 1
  this.http.open('PUT', url, true);
  // 3
  // in addition to the onload, we need to set content type and this is done in the http header
  this.http.setRequestHeader('Content-type', 'application/json');
  // 4
  // 
  let self = this;
  
  this.http.onload = function() {
  // we dont need to check the status, because we are doing a post request
  // the response text should be the new post that we added and the way we check this is it should have the id of 101
      callback(null, self.http.responseText);
    }
  // 2
  // when you are sending data it will be regular javascript object
  // when we pass it in, so wwe need to run it through a function called 
  // JSON.stringify and send it as a JSON string
  this.http.send(JSON.stringify(data));
}


// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  // we make a new variable in order to use the scope below
  // since we are not using => arrow functions
  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
    // this time the response will be an empty object as we are deleting
    // we can say for instance post deleted
      callback(null, 'post deleted');
    // We also want to send back an error when there is something wrong
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}










