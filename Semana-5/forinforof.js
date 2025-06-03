let personas = ['Nacho', 'Juan', 'Fer']

let persona = {
	nombre: 'Fer',
	edad: 31,
	estadoCivil: 'Casado',
}

for (const nombre of personas) {
	console.log(nombre)
}

for (const letra of personas[2]) {
	console.log(letra)
}

for (const claves in persona) {
	console.log(persona[claves])
}
