function login() {
    const login = model.viewState.login;
    const usernameInput = login.userName.trim().toLowerCase();
    const passwordInput = login.password;

    const user = model.data.users.find(
        u => u.userName.toLowerCase() === usernameInput && u.password === passwordInput
    );
    
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
