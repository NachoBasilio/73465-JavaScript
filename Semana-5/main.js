const Alumnos = []
let bandera = true

function creadoraDeIdAleatorio() {
	return Math.floor(Math.random() * 900000) + 100000
}

class Materia {
	constructor(nombre, nota) {
		this.nombre = nombre
		this.nota = nota
	}

	setNota(nota) {
		this.nota = nota
	}
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
	let objetoAuxiliar = new Estudiante(
		nombre,
		apellido,
		edad,
		anioEscolar,
		genero
	)

	Alumnos.push(objetoAuxiliar)
	console.log(Alumnos)
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

const agregarUnaMateria = (id, materia, nota = 0) => {
	let index = buscadoraPorID(id)

	if (index == -1) {
		return
	}

	Alumnos[index].setMaterias(materia, nota)
}

const mostrarMateriaPorPersona = (id) => {
	let index = buscadoraPorID(id)

	if (index == -1) {
		return
	}

	if (Alumnos[index].materias.length == 0) {
		alert('El alumno no tiene materias')
		return
	}

	let mensaje =
		'Las materias y sus notas son las siguientes (El 0 es un valor por defecto): \n'

	for (let i = 0; i < Alumnos[index].materias.length; i++) {
		mensaje += `Materia: ${Alumnos[index].materias[i].nombre} Nota: ${Alumnos[index].materias[i].nota} \n`
	}

	alert(mensaje)
}

while (bandera) {
	let opcion = Number(
		prompt(
			'Bienvendio a Perrito con Chaucha ecuela que quiere hacer: \n 1- Agregar un alumno \n 2- Ver alumnos \n 3- Buscar un alumno por ID \n 4- Agregar un materia a un alumno\n 5- Ver materias de alumno \n 6- Ver promedio de un alumno \n 0- Salir'
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
			let nota = Number(
				prompt('¿Cual es la nota de la materia que quiere agregar?')
			)
			agregarUnaMateria(idAuxMateria, materia, nota)
			break
		case 5:
			let idAuxMaterias = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)
			mostrarMateriaPorPersona(idAuxMaterias)
			break
		case 6:
			let idAuxPromedio = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)

			let index = buscadoraPorID(idAuxPromedio)
			Alumnos[index].showPromedio()
			break
		default:
			alert('No tenemos esa opcion')
			break
	}
}

// class Persona {
// 	constructor(nombre) {
// 		this.nombre = nombre
// 		this.estaVivo = true
// 		this.tieneLuz = true
// 	}

// 	matarAEstaPersona() {
// 		this.estaVivo = false
// 	}

// 	laInfraDelChacoEsMalisimaAsiQueSeQuedoSinLuzLaPersona() {
// 		this.tieneLuz = false
// 	}
// }

// let persona1 = new Persona('Nacho')

// console.log(persona1)

// persona1.laInfraDelChacoEsMalisimaAsiQueSeQuedoSinLuzLaPersona()

// console.log(persona1)

// function Persona(nombre, edad) {
// 	this.nombre = nombre
// 	this.edad = edad

// 	this.saludar = () => {
// 		console.log(this)
// 		console.log('Hola')
// 	}
// 	console.log('addasd')
// }

// let persona1 = new Persona('Nacho', 27)

// console.log(persona1)

// persona1.saludar()

// localStorage.setItem('valorReLoco', JSON.stringify(persona1))

// console.log(JSON.parse(localStorage.getItem('valorReLoco')))

// let persona2 = Persona()

// console.log(persona2)
