

// Carrito de compras
class Tortita {
    constructor (id, sabor, precio, img) {
        this.id = id;
        this.sabor = sabor;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const arandanos = new Tortita (1, "Arandanos", 500, "../recursos/aran.png" )
const frutilla = new Tortita (2, "Frutilla", 500, "../recursos/fru.png" )
const limon = new Tortita (3, "Limon", 500, "../recursos/limon.png" )
const pera = new Tortita (4, "Pera", 500, "../recursos/pera.png" )
const cacao = new Tortita (5, "Cacao", 500, "../recursos/cacao.png" )
const cafe = new Tortita (6, "Cafe", 500, "../recursos/cafe.png" )
const queso = new Tortita (7, "Queso", 500, "../recursos/queso.png" )
const carrot = new Tortita (8, "Carrot", 500, "../recursos/carrot.png" )

const tortitas = [arandanos, frutilla, limon, pera, cacao, cafe, queso, carrot];
let carrito = [];

//Cargo carrito desde localStorage
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse (localStorage.getItem("carrito"));
}

//Vinculo con el contenedor del html
const contenedorProductos = document.getElementById ("contenedorProductos");

//Muestro las tortitas que hay
const mostrarTortitas = () => {
    tortitas.forEach( tortita => {
        
        const card = document.createElement ("div");
        card.classList.add("col-xl-3", "col-md-3", "col-sm-6");
        card.innerHTML = `
                    <div class="card">
                        <img src= " ${tortita.img} " class = "card-img-top  imgProductos">
                        <div class= "card-body">
                            <h3> ${tortita.sabor} </h3>
                            <p> $ ${tortita.precio} </p>
                            <button class="btn btnForm" id="agregarCarrito${tortita.id}"> Agregar al carrito </button>
                        </div>
                    </div>
        `
        contenedorProductos.appendChild (card);

        //Agrego los productos
        const botonCarrito = document.getElementById (`agregarCarrito${tortita.id}`);
        botonCarrito.addEventListener ("click", () => {
            agregarAlCarrito (tortita.id);
            //Notificacion
            Toastify( {
                text: "Tortita añadida al carrito",
                duration: 2000,
                position: "right",
                gravity: "bottom",
                className: "btn",
                backgroundColor: "#FFD8E6"
            }).showToast ();
        })
    })
}
mostrarTortitas ();


//Funcion agregarAlCarrito
const agregarAlCarrito = (id) => {
    const tortitaEnCarrito = carrito.find (tortita => tortita.id === id);
    if (tortitaEnCarrito) {
        tortitaEnCarrito.cantidad++;
    } else {
        const tortita = tortitas.find(tortita => tortita.id === id);
        carrito.push(tortita)
    }
    console.log (carrito)
    calcularTotal();

    //Meto localStorage
    localStorage.setItem ("carrito", JSON.stringify(carrito));

    

}   


//Muestro carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener ("click", () => {
    mostrarCarrito ();
})

//Ruta alternativa para la información nutricional de cada sabor que figure

const listadoInfoNutri = "json/infonutri.json";


const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = ""; //Para que cuando vuelva a tocar ver Carrito no me vuelva a duplicar todo el carrito.
    carrito.forEach (tortita => {
        const card = document.createElement ("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                    <div class="card">
                        <img src= " ${tortita.img} " class = "card-img-tom imgProductos">
                        <div class= "card-body">
                            <h3> ${tortita.sabor} </h3>
                            <p> $ ${tortita.precio} </p>
                            <p>${tortita.cantidad} unidades</p>
                            <button class="btn btnForm" id="eliminar${tortita.id}"> Eliminar del Carrito </button>
                        </div>
                    </div>
        `
        contenedorCarrito.appendChild(card);


        //Eliminar de carrito
        const botonEliminar = document.getElementById (`eliminar${tortita.id}`);
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito (tortita.id);
        })
    })
    calcularTotal();
}


//Funcion para eliminar del carrito
const eliminarDelCarrito = (id) => {
    const tortita = carrito.find (tortita => tortita.id === id);
    const indice = carrito.indexOf (tortita);
    carrito.splice (indice,1);
    mostrarCarrito ();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciar carrito
const vaciarCarrito = document.getElementById ("vaciarCarrito");
vaciarCarrito.addEventListener ("click", () => {
    eliminarTodoElCarrito ();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito ();
    localStorage.clear ();
}


//Total de compras
const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(tortita => {
        totalCompra += tortita.precio * tortita.cantidad;
    })
    total.innerHTML = `${totalCompra}`;
}









