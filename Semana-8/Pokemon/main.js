const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

const botonQueCambiaElEstadoDelCarrito =
	document.getElementById('toggleCartButton')

const carrito = document.getElementById('cart')

const pokemonList = document.getElementById('pokemon-list')

botonQueCambiaElEstadoDelCarrito.addEventListener('click', () => {
	carrito.classList.toggle('show')
})

async function traerUnSoloPokemon() {
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

	arrayDePokemon.forEach((pkm) => {
		creadoraDeCardPokemon(pkm)
	})
}

async function creadoraDeArrayDeUrl(data) {
	return await data.map((ele) => ele.url)
}

traerUnSoloPokemon()

let demoCartPOkemon = `
                <div class="pokemon-card">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
						alt="Pikachu"
						class="pokemon-image"
					/>
					<h2 class="pokemon-name">Pikachu</h2>
					<p class="pokemon-type">Tipo: Eléctrico</p>
					<button class="loan-button">Pedir en Seleccion</button>
				</div>`

function creadoraDeCardPokemon(pokemon) {
	pokemonList.innerHTML += `
                <div class="pokemon-card">
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

navigator.geolocation.getCurrentPosition((pos) => {
	console.log(pos.coords.latitude + ' ' + pos.coords.longitude)
})
