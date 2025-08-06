let amigos = []

function capitalizarNombre(nombre) {
	return nombre
		.toLowerCase()
		.split(' ')
		.filter((p) => p !== '')
		.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
		.join(' ')
}

function agregarAmigo() {
	const input = document.getElementById('amigo')
	let nombre = input.value.trim()

	if (nombre === '') {
		alert('Por favor, inserte un nombre.')
		return
	}

	nombre = capitalizarNombre(nombre) // Capitalizamos antes de guardar

	amigos.push(nombre)
	input.value = ''
	actualizarLista()
}

function actualizarLista() {
	const lista = document.getElementById('listaAmigos')
	lista.innerHTML = ''

	amigos.forEach((nombre) => {
		const li = document.createElement('li')
		li.textContent = nombre
		lista.appendChild(li)
	})
}

function sortearAmigo() {
	const resultado = document.getElementById('resultado')
	resultado.innerHTML = ''

	if (amigos.length === 0) {
		alert('Debe añadir al menos un amigo para sortear.')
		return
	}

	const indiceAleatorio = Math.floor(Math.random() * amigos.length)
	const nombreSorteado = amigos[indiceAleatorio]

	const li = document.createElement('li')
	li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`
	resultado.appendChild(li)
}
