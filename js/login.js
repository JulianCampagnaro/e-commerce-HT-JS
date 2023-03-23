//ACA PRIMERO SE DEBE CARGAR UNA SERIE DE USUARIOS 

//Armo mi clase usuario y el array para todos los usuarios
class Usuario {
    constructor (nombre, correo, pass) {
        this.nombre = nombre;
        this.correo = correo;
        this.pass = pass;
    }
}
const admin = new Usuario ("Julian Campagnaro", "campa@gmail.com", "1234");
let usuariosRegistrados = [];
usuariosRegistrados.push(admin);
/* console.log(usuariosRegistrados) */

//Cargo array de usuarios desde el localStorage
if (localStorage.getItem("usuariosRegistrados")) {
    usuariosRegistrados = JSON.parse (localStorage.getItem("usuariosRegistrados"));
}

//Vinculo con el formulario del SignUp
const formulario = document.getElementById("formularioSignUp");
formulario.addEventListener ("submit", (e) => {
    e.preventDefault();
    const nombreUsuario = document.getElementById ("logNameSignUp").value;
    const correoUsuario = document.getElementById("logEmailSignUp").value;
    const passUsuario = document.getElementById("logPassSignUp").value;

    agregarUsuario (correoUsuario, nombreUsuario,passUsuario);
    
})


//Funcion agregarUsuario
const agregarUsuario = (emailUsuario,nombreUsuario,passUsuario) => {
    const usuarioEnArray = usuariosRegistrados.find (usuario => usuario.correo === emailUsuario);
    if (usuarioEnArray) {
        usuarioYaRegistrado ();
    } else {
        const usuario = new Usuario (nombreUsuario, emailUsuario, passUsuario);
        usuariosRegistrados.push(usuario);
        usuarioRegistradoExitosamente ();
    }
    //Meto localStorage
    localStorage.setItem ("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
    
}


//Inicio de sesión

//Recupero del local el JSON
const usuarioJSON = localStorage.getItem("usuariosRegistrados");
const usuarioArrayNuevo = JSON.parse (usuarioJSON);
console.log(usuarioArrayNuevo)

const formularioLogIn = document.getElementById ("formularioLogIn");
formularioLogIn.addEventListener("submit", (e) => {
    e.preventDefault();
    const correoUsuarioLogIn = document.getElementById ("logEmailLogIn").value;
    const passUsuarioLogIn = document.getElementById ("logPassLogIn").value; 
    validoUsuarioRegistrado (correoUsuarioLogIn,passUsuarioLogIn);
    
})

let flag = 0;

function validoUsuarioRegistrado(correoUsuarioLogIn,passUsuarioLogIn) {
    let flag = 0;
    for (let i = 0; i < usuarioArrayNuevo.length; i++) {
        if (usuarioArrayNuevo[i].correo === correoUsuarioLogIn) { 
            flag ++;  
            const passRegistrada = usuarioArrayNuevo[i].pass;
                if ( passUsuarioLogIn === passRegistrada) {
                    accesoOk ();
                } else {
                    accesoNoOk ();
                }
        }
    } 
    if (flag === 0 ) {
        Swal.fire ( {
            title: "Usuario no registrado",
            icon: "error",
            iconColor: "#9D6B6B",
            confirmButtonText: "Okey",
            confirmButtonColor: "#9D6B6B"
        })
    }
}

function accesoOk () {
    Swal.fire ( {
        /* toast: true, */
        title:"Usted es bienvenido",
        icon: "success",
        confirmButtonText: "COMPREMOS!",
        confirmButtonColor: "#9D6B6B"

    }).then ((result) => {
        if (result.isConfirmed) {
            window.location.href = "tienda.html"
        }
    })
}
function accesoNoOk () {
    Swal.fire ( {
        title: "Ha ocurrido un error, revise los datos",
        icon: "error",
        iconColor: "#9D6B6B",
        confirmButtonText: "Okey",
        confirmButtonColor: "#9D6B6B"
    })
}

function usuarioYaRegistrado () {
    Swal.fire ( {
        title: "El usuario ya se encuentra registrado",
        icon: "error",
        iconColor: "#9D6B6B",
        confirmButtonText: "Okey",
        confirmButtonColor: "#9D6B6B"
    }).then ((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })
}

function usuarioRegistradoExitosamente () {
    Swal.fire ( {
        /* toast:true, */
        title:"Su usuario ha sido registrado exitosamente",
        icon: "success",
        confirmButtonColor: "#9D6B6B"
    }).then ((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })
}