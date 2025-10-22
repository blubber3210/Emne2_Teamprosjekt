function drawRegisterUser() {
    container.innerHTML = /*HTML*/ `
        <div>
            <h1>Lag ny bruker</h1>
            <div>
                <h2>Brukernavn</h2>
                <input 
                placeholder="Ditt brukernavn" 
                onchange="model.viewState.registerUser.username = this.value"
                value="${model.viewState.registerUser.username ?? ""}" 
                />
                <h2>Mailadresse</h2>
                <input 
                placeholder="Din mailadresse"
                onchange="model.viewState.registerUser.email = this.value"
                value="${model.viewState.registerUser.email ?? ""}"
                />
                <h2>Passord</h2>
                <input 
                placeholder="Ditt passord"
                onchange="model.viewState.registerUser.password = this.value"
                value="${model.viewState.registerUser.password ?? ""}"
                type="password"
                />
                <input 
                placeholder="Gjenta passord"
                onchange="model.viewState.registerUser.repeatPassword = this.value"
                value="${model.viewState.registerUser.repeatPassword ?? ""}"
                type="password"
                />
            </div>
            <button onclick="addNewUser()">Lag ny bruker</button>
        </div>
    `;
}