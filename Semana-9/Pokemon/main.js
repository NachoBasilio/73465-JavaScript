const URL = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=387'

const botonQueCambiaElEstadoDelCarrito =
	document.getElementById('toggleCartButton')

const pokemonListaPrestamo = document.getElementById('pokemon-lista-prestamo')
const carrito = document.getElementById('cart')
const pokemonList = document.getElementById('pokemon-list')

const PokemonListApi = []

botonQueCambiaElEstadoDelCarrito.addEventListener('click', () => {
	carrito.classList.toggle('show')
})

async function traerPokemon() {
	let res = await fetch(URL)
	let data = await res.json()

	let urlPokemon = await creadoraDeArrayDeUrl(data.results)
	//creadoraDeCardPokemon(data)

	const arrayDePokemon = await Promise.all(
		urlPokemon.map(async (url) => {
			const res = await fetch(url)
			const data = await res.json()
			return data
		})
	)

	llenarArrayDePokemon(arrayDePokemon)

	PokemonListApi.forEach(async (pkm) => {
		creadoraDeCardPokemon(pkm)
	})
	dadoraDeEventoBotonPrestamo()
}

async function creadoraDeArrayDeUrl(data) {
	return await data.map((ele) => ele.url)
}

function llenarArrayDePokemon(pokemon) {
	pokemon.forEach((pkm) => {
		PokemonListApi.push(pkm)
	})
}

function creadoraDeCardPokemon(pokemon) {
	console.log(pokemon)
	pokemonList.innerHTML += `
                <div id=${pokemon.id} class="pokemon-card">
					<img
						src=${pokemon.sprites.front_default}
						alt=${pokemon.name}
						class="pokemon-image"
					/>
					<h2 class="pokemon-name">${
						pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
					}</h2>
					<p class="pokemon-type">Tipo: ${pokemon.types[0].type.name} ${
		pokemon.types[1]?.type ? ' / ' + pokemon.types[1]?.type.name : ''
	}</p>
					<button class="loan-button">Pedir en Seleccion</button>
				</div>`
}

function dadoraDeEventoBotonPrestamo() {
	const botonesAgregarPokemon = document.getElementsByClassName('loan-button')
	const arrayBotonesAgregarPokemon = Array.from(botonesAgregarPokemon)

	console.log(arrayBotonesAgregarPokemon)
	arrayBotonesAgregarPokemon.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			agregarALaListaDePrestamos(
				e.target.parentElement.children[0].src,
				e.target.parentElement.children[1].innerText
			)
		})
	})
}

function agregarALaListaDePrestamos(src, nombre) {
	pokemonListaPrestamo.innerHTML += `
				<div class="cart-item">
					<img
						src=${src}
						alt=${nombre}
						class="cart-image"
					/>
					<span class="cart-name">${nombre}</span>
				</div>
	`
	Swal.fire({
		title: `Usted esta alquilando un: ${nombre}`,
		imageUrl: src,
		timer: 1000,
		timerProgressBar: true,
		showConfirmButton: false,
	})
}

document.addEventListener('DOMContentLoaded', () => {
	traerPokemon()
})
