// /**
//  * Suma dos números.
//  *
//  * @param {number} a - El primer número a sumar.
//  * @param {number} b - El segundo número a sumar.
//  * @returns {number} La suma de a y b.
//  *
//  * @example
//  * const resultado = suma(2, 3);
//  * console.log(resultado); // 5
//  */
// function suma(a, b) {
// 	return a + b
// }

// suma(2, 3)

// const alumnos = ['Franco', 'Arturo', 'Nacho', 'Lucas']

// const alumnos3 = alumnos.slice() //Clonar

// console.log(alumnos)

// alumnos.splice(2, 0, 'Cesar')

// console.log(alumnos)

// let nombre = alumnos.splice(3, 1)

// console.log(alumnos)

// console.log(alumnos3)

// console.log(nombre)

// const alumnos2 = alumnos.slice(0, alumnos.length)

// console.log(alumnos2)

// let nombresAlumnos = alumnos.join(' * ')

// console.log(nombresAlumnos)

// console.log(alumnos)

// alumnos.sort().reverse()

// console.log(alumnos)

const Alumnos = []
let bandera = true

function creadoraDeIdAleatorio() {
	return Math.floor(Math.random() * 900000) + 100000
}

const creadoraDeArrayDeId = function () {
	const AuxArray = []

	for (let i = 0; i < Alumnos.length; i++) {
		AuxArray.push(Alumnos[i].id)
	}

	return AuxArray
}

function buscadoraPorID(id) {
	if (Alumnos.length == 0) {
		alert('Aun no se ingreso al menos un alumno')
		return -1
	}

	const AuxArray = creadoraDeArrayDeId()

	let index = AuxArray.indexOf(id)

	if (index == -1) {
		alert('Ese alumno no esta')
		return index
	}

	alert(
		`El alumno que usted busca es:\n ${Alumnos[index].id} |   ${Alumnos[index].nombre}    |    ${Alumnos[index].apellido}   |    ${Alumnos[index].edad}   |    ${Alumnos[index].anioEscolar}   |    ${Alumnos[index].genero}`
	)

	return index
}

function agregarAlumnos(nombre, apellido, edad, anioEscolar, genero) {
	let objetoAuxiliar = {
		nombre,
		apellido,
		edad,
		anioEscolar,
		genero,
		id: creadoraDeIdAleatorio(),
		materias: [],
	}

	Alumnos.push(objetoAuxiliar)
}

const verAlumnos = () => {
	let mensaje =
		'Los alumnos son: \n ID | Nombre | Apellido | Edad | Año Escolar | Genero \n '

	if (Alumnos.length == 0) {
		alert('Aun no se ingreso un alumno')
		return
	}

	for (let i = 0; i < Alumnos.length; i++) {
		mensaje += `${Alumnos[i].id} |   ${Alumnos[i].nombre}    |    ${Alumnos[i].apellido}   |    ${Alumnos[i].edad}   |    ${Alumnos[i].anioEscolar}   |    ${Alumnos[i].genero}\n`
	}

	alert(mensaje)
}

const agregarUnaMateria = (id, materia) => {
	let index = buscadoraPorID(id)

	Alumnos[index].materias.unshift(materia)
}

const mostrarMateriaPorPersona = (id) => {
	let index = buscadoraPorID(id)

	console.log(index)
	if (index == -1) {
		return
	}

	if (Alumnos[index].materias.length == 0) {
		alert('El alumno no tiene materias')
		return
	}

	alert('Las materias son: \n' + Alumnos[index].materias.join('\n'))
}

while (bandera) {
	let opcion = Number(
		prompt(
			'Bienvendio a Perrito con Chaucha ecuela que quiere hacer: \n 1- Agregar un alumno \n 2- Ver alumnos \n 3- Buscar un alumno por ID \n 4- Agregar un materia a un alumno\n 5- Ver materias de alumno \n 0- Salir'
		)
	)

	switch (opcion) {
		case 0:
			bandera = false
			break
		case 1:
			let nombreAuxRegistro = prompt('Nombre del alumno:')
			let apellidoAuxRegistro = prompt('Apellido del alumno:')
			let edadAuxRegistro = prompt('Edad del alumno:')
			let anioEscolarAuxRegistro = prompt('Año escolar del alumno:')
			let generoAuxRegistro = prompt('Genero del alumno:')

			agregarAlumnos(
				nombreAuxRegistro,
				apellidoAuxRegistro,
				edadAuxRegistro,
				anioEscolarAuxRegistro,
				generoAuxRegistro
			)
			break
		case 2:
			verAlumnos()
			break
		case 3:
			let idAuxBuscar = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)
			buscadoraPorID(idAuxBuscar)
			break
		case 4:
			let idAuxMateria = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)
			let materia = prompt('¿Cual es la materia que quiere agregar?')
			agregarUnaMateria(idAuxMateria, materia)
			break
		case 5:
			let idAuxMaterias = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)
			mostrarMateriaPorPersona(idAuxMaterias)
			break
		default:
			alert('No tenemos esa opcion')
			break
	}
}
