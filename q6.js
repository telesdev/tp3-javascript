let usuarioLogado = `
    <h3>Usuário Logado</h3>
    <div>
        <p id='emailLogado'></p>
        <p id='passLogado'></p>
        <button type='button' onClick='deslogar()'>Deslogar</button>
    </div>
    `

let formLogin = `
    <h3>Formulário de Login</h3>
    <div>
        <label for='emailLogin'>Email:</label>
        <input type='email' name='emailLogin' id='emailLogin'>
    </div>
    <div>
        <label for='passLogin'>Senha:</label>
        <input type='password' name='passLogin' id='passLogin'>
    </div>
    <button type='button' onClick='loginToSignUp()'>Não tenho cadastro</button>
    <button type='button' onClick='onClickLogin()'>Logar</button>
    `

let formSignUp =  `
    <h3>Formulário de Cadastro</h3>
    <div>
        <label for='emailSignUp'>Email:</label>
        <input type='email' name='emailSignUp' id='emailSignUp'>
    </div>
    <div>
        <label for='pass'>Senha:</label>
        <input type='password' name='passSignUp' id='passSignUp'>
    </div>
    <button type='button' onClick='signUpToLogin()'>Já tenho cadastro</button>
    <button type='button' onClick='onClickSignUp()'>Confirmar o cadastro</button>
    `


let telaPrincipal = document.getElementById('q6').innerHTML = `
    <h2>Questão 6</h2>
    <form>
        ${formLogin}
    </form>
    `

function signUpToLogin() {
    document.querySelector('form').innerHTML = formLogin
}

function loginToSignUp() {
    document.querySelector('form').innerHTML = formSignUp
}

function onClickLogin() {
    let email = document.getElementById('emailLogin').value
    let pass = document.getElementById('passLogin').value

    if (!email)
        return window.alert("Email é um campo obrigatório")
    else if (!pass)
        return window.alert("Senha é um campo obrigatório")

    getFromLocalStorage(email, pass)
}

function onClickSignUp(){
    let email = document.getElementById('emailSignUp').value
    let pass = document.getElementById('passSignUp').value

    if (!email)
        return window.alert("Email é um campo obrigatório")
    else if (!pass)
        return window.alert("Senha é um campo obrigatório")

    add2LocalStorage(email, pass)
}

function add2LocalStorage (_email, _pass) {
    if (Object.keys(localStorage).includes(_email))
        return window.alert('Email já cadastrado')

    localStorage.setItem(_email, _pass)
    window.alert('Email cadastrado com sucesso')
    signUpToLogin()
}

function getFromLocalStorage(_email, _pass){
    if (!Object.keys(localStorage).includes(_email))
        return window.alert('Usuário não cadastrado')
    else
        if (localStorage.getItem(_email) != _pass)
            return window.alert('Senha inválida')
        else {
            document.getElementById('q6').innerHTML = usuarioLogado
            document.getElementById('emailLogado').innerHTML = `Email: ${_email}`
            document.getElementById('passLogado').innerHTML = `Senha: ${_pass}`
        }
}

function deslogar() {
    document.getElementById('q6').innerHTML = telaPrincipal
}