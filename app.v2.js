document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);


// load customer

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);
  // customer.json can also be an external api etc 


  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      // we parse because its a json string, we cant get customer id or just the name if we dont parse it first 
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      
      // we get the id of the html element were we want to input the info from the json file 
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}



// load customers

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);


  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);
      // check for the status


      const customers = JSON.parse(this.responseText);

      
      let output = '';

      // since we have an array we cant just output it , we need to loop through it 
      // this is done with forEach ...and then we pass in a function with(customer)
      // we also initiate a let variable (above), and we call it for instance let output and set it to nothing 
      // we use let as we will re-assign it later inside the loop
      customers.forEach(function(customer){

      // we append (toevoegen)... with += , if we use = we override it, each itteration it will append that new customer onto output
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}


































// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load Single Customer
// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customer.json', true);

//   xhr.onload = function(){
//     if(this.status === 200) {
//       // console.log(this.responseText);

//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;

//       document.getElementById('customer').innerHTML = output;
//     }
//   }

//   xhr.send();
// }


// // Load Customers
// function loadCustomers(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function(){
//     if(this.status === 200) {
//       // console.log(this.responseText);

//       const customers = JSON.parse(this.responseText);

//       let output = '';

//       customers.forEach(function(customer){
//         output += `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;
//       });

//       document.getElementById('customers').innerHTML = output;
//     }
//   }

//   xhr.send();
// }