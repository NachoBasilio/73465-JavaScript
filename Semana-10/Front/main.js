const productos = document.getElementById('productos')
const formulario = document.getElementById('formulario-agrega-productos')
const Carrito = document.getElementById('carrito')
const Total = document.getElementById('total')
const terminarCompra = document.getElementById('terminar-compra')

const carrito = []

function agregarProductos({ descripcion, titulo, precio, imagen, _id }) {
	const contenedor = document.createElement('div')

	const tituloDOM = document.createElement('p')
	const precioDOM = document.createElement('p')
	const imagenDOM = document.createElement('img')
	const descripcionDOM = document.createElement('p')
	const botonComprar = document.createElement('button')

	contenedor.classList.add('contenedor-de-producto')
	precioDOM.classList.add('precio-de-producto')
	imagenDOM.classList.add('imagen-de-producto')
	tituloDOM.classList.add('titulo-de-producto')
	descripcionDOM.classList.add('descripcion-de-producto')
	botonComprar.classList.add('boton-para-comprar-producto')

	tituloDOM.innerText = titulo
	precioDOM.innerText = '$ ' + precio
	imagenDOM.src = imagen
	descripcionDOM.innerText = descripcion
	botonComprar.innerText = 'Comprar'

	botonComprar.addEventListener('click', () => {
		let idProducto = carrito.findIndex((ele) => {
			return ele.id == _id
		})

		if (idProducto == -1) {
			carrito.push({
				descripcion,
				titulo,
				precio,
				imagen,
				id: _id,
				cantidad: 1,
			})
		} else {
			carrito[idProducto].cantidad += 1
		}

		actualizadoraDeCarrito()
	})

	contenedor.append(
		tituloDOM,
		imagenDOM,
		descripcionDOM,
		precioDOM,
		botonComprar
	)

	productos.appendChild(contenedor)
}

function calculadoraTotal() {
	let total = carrito.reduce((acc, el) => {
		return acc + el.cantidad * el.precio
	}, 0)
	Total.innerText = '$ ' + total
}

function actualizadoraDeCarrito() {
	Carrito.innerHTML = ''
	carrito.forEach((productos) => {
		const contenedor = document.createElement('div')

		const tituloDOM = document.createElement('p')
		const precioDOM = document.createElement('p')
		const imagenDOM = document.createElement('img')
		const descripcionDOM = document.createElement('p')
		const cantidadDOM = document.createElement('p')

		contenedor.classList.add('contenedor-de-producto-carrito')
		precioDOM.classList.add('precio-de-producto-carrito')
		imagenDOM.classList.add('imagen-de-producto-carrito')
		tituloDOM.classList.add('titulo-de-producto-carrito')
		descripcionDOM.classList.add('descripcion-de-producto-carrito')
		cantidadDOM.classList.add('cantidad-de-producto-carrito')

		tituloDOM.innerText = productos.titulo
		precioDOM.innerText = '$ ' + productos.precio
		imagenDOM.src = productos.imagen
		descripcionDOM.innerText = productos.descripcion
		cantidadDOM.innerText = productos.cantidad

		contenedor.append(
			tituloDOM,
			precioDOM,
			imagenDOM,
			descripcionDOM,
			cantidadDOM
		)

		Carrito.append(contenedor)
	})
	calculadoraTotal()
}

async function llamadoraDeProductos() {
	productos.innerHTML = ''
	const res = await fetch('http://localhost:3000/api/products')
	const data = await res.json()

	data.forEach((element) => {
		console.log(element)
		agregarProductos(element)
	})
}

async function dadoraDeEventoFormulario() {
	formulario.addEventListener('submit', async (e) => {
		e.preventDefault()
		let tituloFormulario = e.target[0].value
		let precioFormulario = e.target[1].value
		let desc = e.target[2].value
		let img = e.target[3].value

		if (titulo == '' || precio == '' || desc == '' || img == '') {
			Swal.fire(
				'Nono, tenes que tener todos con algo. Si estan vacios esta re mal. NO te das cuenta??'
			)
			return
		}

		const nuevoProducto = {
			titulo: tituloFormulario,
			descripcion: desc,
			precio: precioFormulario,
			imagen: img,
		}

		try {
			const res = await fetch('http://localhost:3000/api/products', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(nuevoProducto),
			})

			if (!res.ok) {
				throw new Error('Error en al respuesta del servidor')
			}

			const data = await res.json()
			console.log(data)

			await llamadoraDeProductos()

			e.target[0].value = ''
			e.target[1].value = ''
			e.target[2].value = ''
			e.target[3].value = ''
		} catch (error) {
			console.error(error)
		}
	})
}

document.addEventListener('DOMContentLoaded', async () => {
	await llamadoraDeProductos()
	await dadoraDeEventoFormulario()

	terminarCompra.addEventListener('click', () => {
		Swal.fire('Gracias por compra')
		let cantidadEnCarrito = carrito.length
		for (let i = 0; i < cantidadEnCarrito; i++) {
			carrito.pop()
		}
		console.log(carrito)
		actualizadoraDeCarrito()
	})
})
