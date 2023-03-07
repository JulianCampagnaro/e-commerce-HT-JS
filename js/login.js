


//SignUp usuario
const formulario = document.getElementById("formularioSignUp");

    formulario.addEventListener ("submit", () => {
        /* e.preventDefault(); */
        const nombreUsuario = document.getElementById ("logNameSignUp").value;
        const correoUsuario = document.getElementById("logEmailSignUp").value;
        const passUsuario = document.getElementById("logPassSignUp").value;
    
        localStorage.setItem ("usuario", nombreUsuario);
        localStorage.setItem ("correo", correoUsuario);
        localStorage.setItem ("pass", passUsuario);
    })


//Inicio de sesión
let correoRecuperado = localStorage.getItem("correo");
let passRecuperado = localStorage.getItem ("pass");

const formularioLogIn = document.getElementById ("formularioLogIn");
formularioLogIn.addEventListener("submit", () => {
    const correoUsuarioLogIn = document.getElementById ("logEmailLogIn").value;
    const passUsuarioLogIn = document.getElementById ("logPassLogIn").value; 

    localStorage.setItem ("correoLog", correoUsuarioLogIn);
    localStorage.setItem("passLog", passUsuarioLogIn);
})

//Valido
if (localStorage.getItem("correoLog") === correoRecuperado && localStorage.getItem("correoLog") != 0 && localStorage.getItem ("passLog") === passRecuperado && localStorage.getItem ("passLog") != null ) {
    Swal.fire ("Usted es bienvenido");
    console.log("Usted es bienvenido");
    localStorage.clear();
}
