
// Carrito de compras
class Tortita {
    constructor (id, sabor, precio, img) {
        this.iid = id;
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

//Vinculo con el contenedor del html
const contenedorProductos = document.getElementById ("contenedorProductos");

//Muestro las tortitas que hay
const mostrarTortitas = () => {
    tortitas.forEach( tortita => {
        const card = document.createElement ("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                    <div class="card">
                        <img src= " ${tortita.img} " class = "card-img-tom imgProductos">
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
}   


