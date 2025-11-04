function verifyRegistration() {
  console.log('verify started');
  let userNameIsVerified = false;
  let passwordIsVerified = false;
  let users = model.data.users;
  let input = model.viewState.registerUser;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === input.username) {
      console.log('Brukernavnet eksisterer allerede');
      document.getElementById('userNameError').textContent =
        'Brukernavnet eksisterer allerede';
      return;
    } else {
      userNameIsVerified = true;
    }
  }
  if (input.password !== input.repeatPassword) {
    console.log('Gjentatt passord er ikke likt');
    document.getElementById('repeatPwError').textContent =
      'Gjentatt passord er ikke likt';

    return;
  } else {
    passwordIsVerified = true;
  }

  if (userNameIsVerified === true && passwordIsVerified === true) {
    addNewUser();
  } else {
    console.log('Catastropic failure idk');
    return;
  }
}

function addNewUser() {
  if (verifyRegistration) {
    let newUser = model.viewState.registerUser;

    model.data.users.push({
      id: getRandomId(),
      userName: newUser.username,
      email: newUser.email,
      password: newUser.password,
      placesAdded: [],
    });
    console.log(model.data.users);
    emptyRegisterUserInput();
    changePage('loginPage');
  }
}

function emptyRegisterUserInput() {
  model.viewState.registerUser.username = '';
  model.viewState.registerUser.email = '';
  model.viewState.registerUser.password = '';
  model.viewState.registerUser.repeatPassword = '';
}

function getRandomId() {
  let randomId = Math.floor(Math.random() * 999);
  for (let i = 0; i < model.data.users.length; i++) {
    if (randomId == model.data.users[i].id) {
      getRandomId();
    }
  }
  console.log('randomId: ', randomId);
  return randomId;
}

function checkPassword() {
  let password = model.viewState.registerUser.password;
  let repeatPassword = model.viewState.registerUser.repeatPassword;

  if (password === repeatPassword) {
    return true;
  } else {
    alert('passordene stemmer ikke');
    return false;
  }
}

function checkUsername() {
  let username = model.viewState.registerUser.username;

  for (let i = 0; i < model.data.users.length; i++) {
    if (username === model.data.users[i].userName) {
      alert('brukernavn er allerede tatt');
      return false;
    }
  }
}

function checkEmail() {
  let email = model.viewState.registerUser.email;

  for (let i = 0; i < model.data.users.length; i++) {
    if (email === model.data.users[i].email) {
      alert('eposten er allerede i bruk');
      return false;
    }
  }
}

/*
- Få den nye brukeren i data
- Lage en funksjon som generer en tilfeldig id
- Sjekke om passord samsvarer
- Om bruker eksisterer fra før
*/
