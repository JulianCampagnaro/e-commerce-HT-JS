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


