function login() {
    const login = model.viewState.login;
    const user = model.data.users.find(u => u.userName === login.userName && u.password === login.password);
    const messageEl = document.getElementById('message');
    if (user) {
        model.app.currentUser = user.userName;
        updateView();
    } else {
        messageEl.textContent = 'Feil brukernavn eller passord';
        messageEl.style.color = 'red';
    }
}

function logout() {
    model.app.currentUser = null;
    model.viewState.username = '';
    model.viewState.password = '';
    updateView();
}
