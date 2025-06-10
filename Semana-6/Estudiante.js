class Estudiante {
	constructor(nombre, apellido, edad, anioEscolar, genero, id) {
		this.nombre = nombre
		this.apellido = apellido
		this.edad = edad
		this.anioEscolar = anioEscolar
		this.genero = genero
		this.id = id || creadoraDeIdAleatorio()
		this.materias = []
		this.materiasAprobadas = []
		this.materiasDesaprobadas = []
		// this.nombresMaterias = []
		this.promedio = 0
	}

	setMaterias(materia, nota) {
		let index = this.verSiExisteLaMateria(materia)

		if (index != -1) {
			alert('La nota se sobreescribio')
			this.materias[index].setNota(nota)
		} else {
			let axuMateria = new Materia(materia, nota)
			this.materias.push(axuMateria)
		}

		this.calcularPromedio()
		this.calcularMateriasAprobadas()
		this.calcularMateriasDesprobadas()
	}

	calcularPromedio() {
		this.promedio = 0

		let sumaNotas = this.materias.reduce((acc, materia)=> {
			return acc += Number(materia.nota)
		}, 0)

		this.promedio = sumaNotas / this.materias.length
	}

	showPromedio() {
		if (this.materias.length == 0) {
			alert('NO HAY MATERIAS AUN')
		} else {
			alert(`Tu promedio general es de: ${this.promedio}`)
		}
	}

	calcularMateriasAprobadas(){
		this.materiasAprobadas = this.materias.filter(materias=>{
			return materias.nota >= 6
		})
	}

	calcularMateriasDesprobadas(){
		this.materiasDesaprobadas = this.materias.filter(materias=>{
			return materias.nota < 6
		})
	}
	// creadoraDeNombresMaterias() {
	// 	this.nombresMaterias = []

	// 	for (let i = 0; i < this.materias.length; i++) {
	// 		this.nombresMaterias.push(this.materias[i].nombre)
	// 	}
	// }

	verSiExisteLaMateria(nombre) {
		let index = this.materias.findIndex(materia => materia.nombre == nombre)

		return index
	}
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