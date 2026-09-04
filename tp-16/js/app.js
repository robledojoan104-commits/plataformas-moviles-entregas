// URL base de PokeAPI
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

// Cantidad de Pokémon que vamos a cargar
let cantidadPokemon = 151;


// Elementos del HTML
const contenedor = document.getElementById("pokemon-container");
const spinner = document.getElementById("spinner");
const botonCargarMas = document.getElementById("btn-cargar-mas");


// Cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    cargarPokemon();
});


// Función para cargar Pokémon
async function cargarPokemon() {

    mostrarSpinner();

    try {

        // Creamos un array con las consultas
        const consultas = [];

        for (let i = 1; i <= cantidadPokemon; i++) {

            consultas.push(
                fetch(API_URL + i).then(respuesta => respuesta.json())
            );

        }

        // Esperamos todas las respuestas
        const pokemon = await Promise.all(consultas);

        // Limpiamos el contenedor
        contenedor.innerHTML = "";

        // Mostramos los Pokémon
        pokemon.forEach(mostrarPokemon);

    } catch (error) {

        console.error("Error al obtener los Pokémon:", error);

        contenedor.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-danger">
                    No se pudieron cargar los Pokémon.
                </div>
            </div>
        `;

    } finally {

        ocultarSpinner();

    }
}


// Mostrar un Pokémon en una carta
function mostrarPokemon(pokemon) {

    // Obtenemos los tipos
    const tipos = pokemon.types.map(tipo => {

        return `
            <span class="pokemon-tipo">
                ${tipo.type.name}
            </span>
        `;

    }).join("");


    // Creamos la carta
    const carta = document.createElement("div");

    carta.classList.add(
        "col-12",
        "col-sm-6",
        "col-md-4",
        "col-lg-3"
    );


    carta.innerHTML = `

        <div class="card card-pokemon h-100 shadow-sm">

            <div class="card-body text-center">

                <h5 class="card-title text-capitalize">
                    ${pokemon.name}
                </h5>

                <img
                    src="${pokemon.sprites.other["official-artwork"].front_default}"
                    alt="${pokemon.name}"
                    class="img-fluid"
                >

                <div class="mb-3">
                    ${tipos}
                </div>

                <button
                    class="btn btn-primary"
                    onclick="mostrarDetalles(${pokemon.id})">

                    Ver más

                </button>

            </div>

        </div>

    `;


    contenedor.appendChild(carta);
}


// Mostrar detalles
async function mostrarDetalles(id) {

    const modalBody = document.getElementById("modal-body");

    modalBody.innerHTML = `
        <div class="text-center">
            <div class="spinner-border"></div>
            <p class="mt-2">Cargando información...</p>
        </div>
    `;


    // Abrimos el modal
    const modal = new bootstrap.Modal(
        document.getElementById("pokemonModal")
    );

    modal.show();


    try {

        const respuesta = await fetch(API_URL + id);

        const pokemon = await respuesta.json();


        // Tipos
        const tipos = pokemon.types.map(tipo => {
            return `
                <span class="pokemon-tipo">
                    ${tipo.type.name}
                </span>
            `;
        }).join("");


        // Habilidades
        const habilidades = pokemon.abilities
            .slice(0, 1)
            .map(habilidad => habilidad.ability.name)
            .join("");


        // Movimientos
        const movimientos = pokemon.moves
            .slice(0, 4)
            .map(movimiento => {

                return `
                    <li class="text-capitalize">
                        ${movimiento.move.name}
                    </li>
                `;

            }).join("");


        // Mostramos la información
        modalBody.innerHTML = `

            <div class="text-center">

                <h3 class="text-capitalize">
                    ${pokemon.name}
                </h3>

                <img
                    src="${pokemon.sprites.other["official-artwork"].front_default}"
                    alt="${pokemon.name}"
                    class="img-fluid"
                    style="max-height: 220px;"
                >

                <h5 class="mt-3">
                    Tipos
                </h5>

                <div>
                    ${tipos}
                </div>

                <h5 class="mt-4">
                    Habilidad
                </h5>

                <p class="text-capitalize">
                    ${habilidades}
                </p>

                <h5>
                    Movimientos
                </h5>

                <ul class="movimientos text-start">
                    ${movimientos}
                </ul>

            </div>

        `;

    } catch (error) {

        console.error(error);

        modalBody.innerHTML = `
            <div class="alert alert-danger">
                No se pudo obtener la información.
            </div>
        `;

    }

}


// Cargar más Pokémon
botonCargarMas.addEventListener("click", async () => {

    cantidadPokemon += 50;

    await cargarPokemon();

});


// Mostrar spinner
function mostrarSpinner() {
    spinner.classList.remove("d-none");
}


// Ocultar spinner
function ocultarSpinner() {
    spinner.classList.add("d-none");
}