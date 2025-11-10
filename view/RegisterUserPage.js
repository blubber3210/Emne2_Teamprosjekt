function showRegisterUserPage() {
    let html = /*HTML*/ `
        <div class="registerDiv">
            <img src="media/logo.png" alt="Logo" width="120" height="120">
            <h1 class="title">Lag ny bruker</h1>
            <div>
                <h2 class="registerText">Brukernavn</h2>
                <input
                class="registerInput"
                placeholder="Ditt brukernavn"
                onchange="model.viewState.registerUser.username = this.value"
                value="${model.viewState.registerUser.username ?? ''}"
                />
                <div id="userNameError" style="color: red;"></div>
                <h2 class="registerText">Mailadresse</h2>
                <input
                class="registerInput"
                placeholder="Din mailadresse"
                onchange="model.viewState.registerUser.email = this.value"
                value="${model.viewState.registerUser.email ?? ''}"
                />
                <h2 class="registerText">Passord</h2>
                <input
                class="registerInput"
                placeholder="Ditt passord"
                onchange="model.viewState.registerUser.password = this.value"
                value="${model.viewState.registerUser.password ?? ''}"
                type="password"
                />
                <input
                class="registerInput"
                placeholder="Gjenta passord"
                onchange="model.viewState.registerUser.repeatPassword = this.value"
                value="${model.viewState.registerUser.repeatPassword ?? ''}"
                type="password"
                />
                <div id="repeatPwError"style="color: red;"></div>
            </div>
            <button class="registerButton" onclick="verifyRegistration()">Lag ny bruker</button>
        </div>
    `;

  return html;
}
