// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {strings} city
 */


/**
 * @typedef {object} User2
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User2>} 
 */
function fetchUser(){
  return axios.get(url);
}

fetchUser().then(function(response){
  response.address.street
})

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerText = user.username;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
