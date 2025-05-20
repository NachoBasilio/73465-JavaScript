let seLogeo = false
let bandera = true
let saldo
let deuda
const usuarioCorrecto = 'admin'
const passCorrecto = '1234'

function login(user, pass) {
	if (usuarioCorrecto === user && passCorrecto === pass) {
		alert('Usted entro de manera correcta a su cuenta')
		return true
	} else {
		alert('Su contraseña esta mal, o su usuario')
		return false
	}
}

function evaluadoraDeNumero(numero, limite = 5000000) {
	while (isNaN(numero) || numero < 0 || numero > limite) {
		alert('Este valor no es un numero valido')
		numero = Number(prompt('Ingrese un numero valido'))
	}
	return numero
}

function depositarORetirar(dinero, operacion) {
	if (operacion == '+') {
		saldo += dinero
	} else if (operacion == '-') {
		saldo -= dinero
	}
}

const prestamo = (dinero) => {
	if ((deuda + dinero) * 1.4 > 7000) {
		alert('No podes seguir tomando deuda')
	} else {
		saldo += dinero
		deuda += dinero * 1.4
	}
}

const pagarPrestamo = (dinero) => {
	if (dinero > deuda) {
		saldo -= deuda
		deuda = 0
	} else {
		saldo -= dinero
		deuda -= dinero
	}
}

for (let i = 0; i < 3; i += 1) {
	let usuarioPrompt = prompt('Usuario:')
	let contrasenaPrompt = prompt('Ingrese la contraseña:')
	seLogeo = login(usuarioPrompt, contrasenaPrompt)
	if (seLogeo) {
		break
	}
	if (i == 2) {
		alert('Te quedaste sin intententos')
	}
}

if (seLogeo) {
	let valorInicia = Number(prompt('Con cuanto dinero quiere arrancar?'))

	if (isNaN(valorInicia)) {
		valorInicia = null
	}

	bandera = true

	saldo = valorInicia ?? -1
	let saldoEnPesos = 0
	let numeroAxu = 0
	deuda = 0
	let menuText =
		'Bienvenidos a Coder Bank:\n 1- Ver saldo\n 2- Depositar\n 3- Retirar\n 4- Prestamo \n 5- Ver Deuda \n 6- Pagar deuda \n 7- Ver saldo en pesos \n 8- Ver deuda en pesos \n 9- Comprar pesos \n 0- Salir '

	while (bandera) {
		let menu = Number(prompt(menuText))

		while (isNaN(menu)) {
			alert('Te pedi numeros y me mandaste cualqueir cosa.')
			menu = Number(prompt(menuText))
		}

		switch (menu) {
			case 1:
				alert(`Su saldo es ${saldo.toFixed(2)}`)
				break
			case 2:
				numeroAxu = Number(prompt('¿Cuanto quiere ingresar?'))

				numeroAxu = evaluadoraDeNumero(numeroAxu)

				depositarORetirar(numeroAxu, '+')

				break
			case 3:
				numeroAxu = Number(prompt('¿Cuanto quiere ingresar?'))

				numeroAxu = evaluadoraDeNumero(numeroAxu, saldo)

				depositarORetirar(numeroAxu, '-')

				break
			case 4:
				numeroAxu = Number(prompt('¿Cuanto quiere pedir prestado?'))

				numeroAxu = evaluadoraDeNumero(numeroAxu, 5000)

				prestamo(numeroAxu)

				break
			case 5:
				alert(`Su deuda es de: ${deuda.toFixed(2)} :D`)
				break
			case 6:
				alert(`Su deuda es de: ${deuda.toFixed(2)} :D`)

				numeroAxu = Number(prompt('¿Cuanto quiere pagar de su deuda?'))

				numeroAxu = evaluadoraDeNumero(numeroAxu, saldo)

				pagarPrestamo(numeroAxu)

				break
			case 7:
				alert(`Su cuenta en pesos es de: ${(saldo * 1200).toFixed(2)}`)

				break
			case 8:
				alert(`Su deuda en pesos es de: ${(deuda * 1200).toFixed(2)}`)

				break
			case 9:
				numeroAxu = Number(
					prompt('¿Cuantos sucios dolares quiere pasar a grandes pesos?')
				)

				while (isNaN(numeroAxu) || numeroAxu < 0) {
					alert('El valor es invalido')
					numeroAxu = Number(
						prompt('¿Cuantos sucios dolares quiere pasar a grandes pesos?')
					)
				}

				let numeroAxuPesos = numeroAxu * 1200

				alert(
					`Su dolares se trasformaron en ${numeroAxuPesos.toFixed(
						2
					)} pesos, la mejor moneda de mundo.`
				)

				saldoEnPesos += numeroAxuPesos
				break
			case 0:
				alert('¡Nos vemos!')
				bandera = false
				break
			default:
				alert('Me ejecuto si es otro numero')
				break
		}
	}
}
