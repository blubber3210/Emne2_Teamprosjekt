function showLoginPage() {
    let html = ""
    if (model.app.currentUser == null) {
        html = `
            <h2>Logg inn</h2>
            <input 
                type="text" 
                placeholder="Brukernavn" 
                value="TEST"
                oninput="model.viewState.login.userName=this.value"
            />
            <input 
                type="password" 
                placeholder="Passord" 
                value="TEST"
                oninput="model.viewState.login.password=this.value"
            />
            <button onclick="login()">Logg inn</button>
            <div id="message"></div>
        `;
    } else {
        html = `
            <h2>Velkommen, TEST</h2>
            <button onclick="logout()">Logg ut</button>
        `;
    }
    container.innerHTML= html
}
