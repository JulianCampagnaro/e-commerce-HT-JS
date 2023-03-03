//Modo de la página
const botonModo = document.getElementById("botonModo"); 
botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark"); //acordate que con toggle lo que hago es agregar o eliminar un style en css.
    
    if (document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo","claro");
    }

    //contains me dice si ese elemento de HTML tiene una clase asignada específica, en este caso, dark
})

const modo = localStorage.getItem("modo");

if(modo === "dark" ) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

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
if (localStorage.getItem("correoLog") === correoRecuperado && localStorage.getItem ("passLog") === passRecuperado) {
    console.log("Usted es bienvenido");
}
