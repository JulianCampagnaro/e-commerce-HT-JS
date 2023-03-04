//Modo de la página
const botonModo = document.getElementById("botonModo"); 
botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark"); //acordate que con toggle lo que hago es agregar o eliminar un style en css.
    if (document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo","claro");
    }
})

const modo = localStorage.getItem("modo");

if(modo === "dark" ) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

//Para el scroll del header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
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
if (localStorage.getItem("correoLog") === correoRecuperado && localStorage.getItem("correoLog") != 0 && localStorage.getItem ("passLog") === passRecuperado && localStorage.getItem ("passLog") != null ) {
    console.log("Usted es bienvenido");
}
