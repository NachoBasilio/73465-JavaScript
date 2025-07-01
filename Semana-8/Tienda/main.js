const cartPanel = document.getElementById('cart-panel')
const cartBtn = document.getElementById('cart-btn')
const contenedorProductos = document.getElementById('contenedor-productos')
const cartItems = document.getElementById('cart-items')
const total = document.getElementById('total')
const terminarCompra = document.getElementById('terminar-compra')

const Carrito = JSON.parse(localStorage.getItem('carrito_perros')) || []

cartBtn.addEventListener('click', (e) => {
	cartPanel.classList.toggle('active')
})

const products = []

// fetch('./data.json')
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw new Error('No se encuentra el archivo')
// 		}
// 		return res.json()
// 	})
// 	.then((data) => {
// 		data.forEach((el) => {
// 			products.push(el)
// 		})
// 		main()
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

async function llamadoDeData() {
	try {
		let res = await fetch('./data.json')
		let data = await res.json()
		data.forEach((el) => {
			products.push(el)
		})
	} catch (error) {
		alert(error.name)
	}
}

function creadoraDeCards() {
	products.forEach((ele) => {
		contenedorProductos.innerHTML += `
    <div class="product-card" id=${ele.id + 'C'}>
			<img
					src=${ele.image}
					alt=${ele.title}
			/>
			<h3>${ele.title}</h3>
			<p>${ele.description}</p>
			<span class="price">$${ele.price}</span>
			<button class="add-to-cart">Agregar al carrito</button>
		</div>
`
	})
}
function actualizarCarrito() {
	creadoraDeCardsEnElCarrito()
	calculadoraTotal()
	localStorage.setItem('carrito_perros', JSON.stringify(Carrito))
}

function calculadoraTotal() {
	total.innerText =
		'Total: $' +
		Carrito.reduce((acc, ele) => {
			return (acc += ele.price)
		}, 0)
}

function buscadoraDeProductoEnLista(id) {
	return products.find((el) => el.id + 'C' == id)
}

function agregadoraACarrito(producto) {
	Carrito.push(producto)
	actualizarCarrito()
}

function creadoraDeCardsEnElCarrito() {
	cartItems.innerHTML = ''
	Carrito.forEach((producto) => {
		cartItems.innerHTML += `
    <div class="product-card" id=${producto.id + 'A'}>
			<img
					src=${producto.image}
					alt=${producto.title}
			/>
			<h3>${producto.title}</h3>
			<span class="price">$${producto.price}</span>
		</div>
    `
	})
}

function dadoraDeEventosABoton() {
	const HTMLElementsBotones = document.getElementsByClassName('add-to-cart')
	const ArrayBotones = Array.from(HTMLElementsBotones)

	ArrayBotones.forEach((boton) => {
		boton.addEventListener('click', (e) => {
			let producto = buscadoraDeProductoEnLista(e.target.parentElement.id)
			agregadoraACarrito(producto)
		})
	})
}

terminarCompra.addEventListener('click', () => {
	Carrito.splice(0, Carrito.length)

	actualizarCarrito()
})

async function main() {
	await llamadoDeData()
	actualizarCarrito()
	creadoraDeCards()
	dadoraDeEventosABoton()
}

main()
