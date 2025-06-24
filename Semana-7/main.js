//const main = document.getElementById('main')

//main.innerHTML = main.innerHTML + '<h2>Hola</h2>'

// main.innerHTML += '<h2>Hola</h2>'
//main.innerText += '<h2>Hola</h2>'

// main.innerHTML = ''

//console.dir(main)

const cartPanel = document.getElementById('cart-panel')
const cartBtn = document.getElementById('cart-btn')
const contenedorProductos = document.getElementById('contenedor-productos')
const cartItems = document.getElementById('cart-items')
const total = document.getElementById('total')
const terminarCompra = document.getElementById('terminar-compra')

const Carrito = JSON.parse(localStorage.getItem('carrito_perros')) || []

cartBtn.addEventListener('click', (e) => {
	//console.log(e)

	// if (cartPanel.classList.contains('active')) {
	// 	cartPanel.classList.remove('active')
	// } else {
	// 	cartPanel.classList.add('active')
	// }

	cartPanel.classList.toggle('active')
	// main.classList.toggle('dark')
})

const products = [
	{
		id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
		title: 'Juguete de Peluche',
		description: 'Suave peluche con chirriador para horas de diversión.',
		price: 4990,
		image: 'https://placedog.net/400/300?id=1',
		alt: 'Juguete de peluche para perrito',
	},
	{
		id: '9c858901-8a57-4791-81fe-4c455b099bc9',
		title: 'Correa Ajustable',
		description: 'Correa resistente y cómoda, ajustable hasta 2 metros.',
		price: 7990,
		image: 'https://placedog.net/400/300?id=2',
		alt: 'Correa ajustable para perrito',
	},
	{
		id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
		title: 'Cama Ortopédica',
		description: 'Cama ergonómica con espuma de memoria para mayor confort.',
		price: 25990,
		image: 'https://placedog.net/400/300?id=3',
		alt: 'Cama ortopédica para perrito',
	},
	{
		id: 'e4eaaaf2-d142-11e1-b3e4-080027620cdd',
		title: 'Bowl Antideslizante',
		description:
			'Bowl de acero inoxidable con base de silicona antideslizante.',
		price: 3990,
		image: 'https://placedog.net/400/300?id=4',
		alt: 'Bowl antideslizante para perrito',
	},
	{
		id: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
		title: 'Pack de Snacks Saludables',
		description: 'Variedad de snacks naturales para premiar a tu mascota.',
		price: 5990,
		image: 'https://placedog.net/400/300?id=5',
		alt: 'Pack de snacks saludables para perrito',
	},
	{
		id: 'adbb3cfa-1234-4f56-9abc-7d9e1234abcd',
		title: 'Arnés Reflectante',
		description:
			'Arnés ergonómico con bandas reflectantes para paseos nocturnos.',
		price: 12990,
		image: 'https://placedog.net/400/300?id=6',
		alt: 'Arnés reflectante para perrito',
	},
	{
		id: 'bb12ef34-5678-4abc-def0-1234567890ab',
		title: 'Cepillo Desenredante',
		description: 'Cepillo suave que elimina nudos y reduce el pelo suelto.',
		price: 2990,
		image: 'https://placedog.net/400/300?id=7',
		alt: 'Cepillo desenredante para perrito',
	},
	{
		id: 'cc23de45-6789-4bcd-0f12-234567890abc',
		title: 'Chaleco Salvavidas',
		description: 'Chaleco con flotador incorporado para actividades acuáticas.',
		price: 18990,
		image: 'https://placedog.net/400/300?id=8',
		alt: 'Chaleco salvavidas para perrito',
	},
	{
		id: 'dd34ef56-7890-4cde-1f23-34567890abcd',
		title: 'Set de Limpieza Dental',
		description:
			'Cepillo y pasta especial para la higiene bucal de tu mascota.',
		price: 3490,
		image: 'https://placedog.net/400/300?id=9',
		alt: 'Set de limpieza dental para perrito',
	},
	{
		id: 'ee45fa67-8901-4def-2g34-4567890abcde',
		title: 'Pañales para Cachorros',
		description:
			'Caja con 20 pañales desechables para tus cachorros en proceso de entrenamiento.',
		price: 6990,
		image: 'https://placedog.net/400/300?id=10',
		alt: 'Pañales desechables para cachorros',
	},
]

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

function main() {
	actualizarCarrito()
	creadoraDeCards()
	dadoraDeEventosABoton()
}

main()
