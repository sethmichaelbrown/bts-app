document.addEventListener('DOMContentLoaded', function(event) {
  console.log("It's Alive")
  M.AutoInit();


  const login = document.querySelector('.login-button')

  login.addEventListener('click', (event) => {
    console.log('button clicked')
  })


}) // DOMContentLoaded;
