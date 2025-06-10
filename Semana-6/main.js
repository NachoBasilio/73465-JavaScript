
const AlumnosLocalStorage = JSON.parse(localStorage.getItem("Alumnos"))
const Alumnos = []
let bandera = true

if(AlumnosLocalStorage.length > 0 || AlumnosLocalStorage != null){
	AlumnosLocalStorage.forEach(alumno=>{

		const objetoAux = new Estudiante(alumno.nombre, alumno.apellido, alumno.edad, alumno.anioEscolar, alumno.genero, alumno.id)

		alumno.materias.forEach(materia => {
			objetoAux.setMaterias(materia.nombre, materia.nota)
		})

		Alumnos.push(objetoAux)
	})
}

function creadoraDeIdAleatorio() {
	return Math.floor(Math.random() * 900000) + 100000
}

// const creadoraDeArrayDeId = function () {
// 	const AuxArray = []

// 	for (let i = 0; i < Alumnos.length; i++) {
// 		AuxArray.push(Alumnos[i].id)
// 	}

// 	return AuxArray
// }

// const creadoraDeArrayDeId = function () { return Alumnos.map(alu => alu.id)}

function funcionQueGuardaLosAlumnosEnElLocalStorage(){
	localStorage.setItem("Alumnos", JSON.stringify(Alumnos))
}

function buscadoraPorID(id) {
	if (Alumnos.length == 0) {
		alert('Aun no se ingreso al menos un alumno')
		return -1
	}

	let index = Alumnos.findIndex(el => {
		return el.id == id
	})

	if (index == -1) {
		alert('Ese alumno no esta')
		return index
	}

	alert(
		`El alumno que usted busca es:\n ${Alumnos[index].id} |   ${Alumnos[index].nombre}    |    ${Alumnos[index].apellido}   |    ${Alumnos[index].edad}   |    ${Alumnos[index].anioEscolar}   |    ${Alumnos[index].genero}`
	)

	return index
}


function buscadoraPorIDConFind(id) {
	if (Alumnos.length == 0) {
		alert('Aun no se ingreso al menos un alumno')
		return -1
	}

	let alumno = Alumnos.find(el => {
		return el.id == id
	})

	if(alumno == undefined){
		alert("Ese alumno no se encuentra en nuestra base de datos")
		return -1
	}

	alert(
		`El alumno que usted busca es:\n ${alumno.id} |   ${alumno.nombre}    |    ${alumno.apellido}   |    ${alumno.edad}   |    ${alumno.anioEscolar}   |    ${alumno.genero}`
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
	funcionQueGuardaLosAlumnosEnElLocalStorage()
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
	funcionQueGuardaLosAlumnosEnElLocalStorage()
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

	// let mensaje =
	// 	'Las materias y sus notas son las siguientes (El 0 es un valor por defecto): \n'

	// for (let i = 0; i < Alumnos[index].materias.length; i++) {
	// 	mensaje += `Materia: ${Alumnos[index].materias[i].nombre} Nota: ${Alumnos[index].materias[i].nota} \n`
	// }

	let mensaje = Alumnos[index].materias.reduce((acc, materias)=>{
		return acc += `Materia: ${materias.nombre} Nota: ${materias.nota} \n`
	},
	'Las materias y sus notas son las siguientes (El 0 es un valor por defecto): \n')


	alert(mensaje)
}


const mostrarMateriaAprobadasPorPersona = (id) => {
	let index = buscadoraPorID(id)

	if (index == -1) {
		return
	}

	if (Alumnos[index].materiasAprobadas.length == 0) {
		alert('El alumno no tiene materias')
		return
	}


	let mensaje = Alumnos[index].materiasAprobadas.reduce((acc, materias)=>{
		return acc += `Materia: ${materias.nombre} Nota: ${materias.nota} \n`
	},
	'Las materias aprobadas y sus notas son las siguientes (nota >= 6): \n')

	alert(mensaje)
}

const mostrarMateriaDesaprobadasPorPersona = (id) => {
	let index = buscadoraPorID(id)

	if (index == -1) {
		return
	}

	if (Alumnos[index].materiasDesaprobadas.length == 0) {
		alert('El alumno no tiene materias')
		return
	}

	let mensaje = Alumnos[index].materiasDesaprobadas.reduce((acc, materias)=>{
		return acc += `Materia: ${materias.nombre} Nota: ${materias.nota} \n`
	},
	'Las materias desaprobadas y sus notas son las siguientes (nota < 6): \n')

	alert(mensaje)
}

while (bandera) {
	let opcion = Number(
		prompt(
			'Bienvendio a "Perrito con Chaucha escuela" que quiere hacer: \n 1- Agregar un alumno \n 2- Ver alumnos \n 3- Buscar un alumno por ID \n 4- Agregar un materia a un alumno\n 5- Ver materias de alumno \n 6- Ver promedio de un alumno \n 0- Salir'
		)//Promedio mayor, promedio general, ordenar por promedio
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
			buscadoraPorIDConFind(idAuxBuscar)
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
		case 7:
			let idAuxMateriasAprobadas = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)

			mostrarMateriaAprobadasPorPersona(idAuxMateriasAprobadas)
			break
		case 8:
			let idAuxMateriasDesprobadas = Number(
				prompt('¿Cual es el ID del alumno que usted busca?')
			)

			mostrarMateriaDesaprobadasPorPersona(idAuxMateriasDesprobadas)
			break
		default:
			alert('No tenemos esa opcion')
			break
	}
}

// let arrayNumeros = [1,2,3,4]

// let arrayFiltrado = arrayNumeros.filter(el => el > 5)

// console.log(arrayFiltrado) // []