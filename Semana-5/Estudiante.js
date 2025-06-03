class Estudiante {
	constructor(nombre, apellido, edad, anioEscolar, genero) {
		this.nombre = nombre
		this.apellido = apellido
		this.edad = edad
		this.anioEscolar = anioEscolar
		this.genero = genero
		this.id = creadoraDeIdAleatorio()
		this.materias = []
		this.nombresMaterias = {}
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
	}

	calcularPromedio() {
		this.promedio = 0
		let sumaNotas = 0

		for (let i = 0; i < this.materias.length; i++) {
			sumaNotas += Number(this.materias[i].nota)
			console.log(this.promedio)
		}

		this.promedio = sumaNotas / this.materias.length
		console.log(this.promedio)
	}

	showPromedio() {
		if (this.materias.length == 0) {
			alert('NO HAY MATERIAS AUN')
		} else {
			alert(`Tu promedio general es de: ${this.promedio}`)
		}
	}

	creadoraDeNombresMaterias() {
		this.nombresMaterias = []

		for (let i = 0; i < this.materias.length; i++) {
			this.nombresMaterias.push(this.materias[i].nombre)
		}
	}

	verSiExisteLaMateria(nombre) {
		this.creadoraDeNombresMaterias()

		console.log(this.nombresMaterias)

		let index = this.nombresMaterias.indexOf(nombre)
		console.log(index)

		return index
	}
}
