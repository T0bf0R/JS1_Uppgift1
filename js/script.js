const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const myForm = document.getElementById("myForm");
const output = document.querySelector('#output');

const users = []

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  id = Date.now().toString();
}

const createUser = (firstName, lastName, email) => {

  const user = new User(firstName, lastName, email);

  users.push(user); //pushar till min array
  output.insertAdjacentHTML('beforeend', newUser(user)); // lägger till i min UI
  
}

const newUser = user => {
  const template = `
    <div class="card p-1 mb-1">
     <div class="card-header">
       <p><span><i class="fas fa-key"></i></span> ${user.id}</p>
      </div>
      <div class="card-content has-text-centered p-1">
       <h3><i class="fas fa-user"></i> ${user.firstName} ${user.lastName}</h3>
       <p><i class="fas fa-envelope"></i> ${user.email}</p>
      </div>
      <div class="card-footer p-1">
        <button class="button is-primary is-fullwidth mr-1" disabled>Edit</button>
        <button class="button is-danger is-fullwidth ml-1">Delete</button>
      </div>
    </div>
  `
  return template
}



myForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log("Submit");

  

  createUser(firstName.value, lastName.value, email.value);
  reset();
  
});



function reset(){
  document.getElementById("myForm").reset();
  console.log('reset');
}

