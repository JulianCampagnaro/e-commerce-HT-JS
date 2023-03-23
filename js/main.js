//Modo de la página
const botonModo = document.getElementById("botonModo"); 

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark"); 
    if (document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo","claro");
    }
})
const modo = localStorage.getItem("modo");
if(modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

const infoNutri = "../json/infonutri.json";
const contenedorInfoNutri = document.getElementById ("contenedorInfoNutri");
const botonInfoNurtri = document.getElementById ("botonInfoNutri");
const titularInfo = document.getElementById ("titularInfo");

botonInfoNurtri.addEventListener ("click", () => {
    botonInfoNurtri.style.display="none";
    titularInfo.innerHTML = `
                <tr>
                <th scope="col" class="detalleTabla">Sabor</th>
                <th scope="col" class="detalleTabla">Info Nutricional</th>
                <th scope="col" class="detalleTabla">Gramos Proteina</th>
                </tr>
    `
    fetch (infoNutri)
    .then ( respuesta => respuesta.json () )
    .then (datos => {
        datos.forEach (producto => {
            contenedorInfoNutri.innerHTML += `
            <tr>
                <th scope="row" class="detalleTabla">${producto.sabor}</th>
                <td>${producto.info}</td>
                <td>${producto.prote}</td>
            </tr>

            `
        })
    })
    .catch (error => console.log (error))
    .finally ( () => console.log ("Proceso finalizado"));
})





