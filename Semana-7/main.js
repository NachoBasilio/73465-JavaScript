//const main = document.getElementById('main')

//main.innerHTML = main.innerHTML + '<h2>Hola</h2>'

// main.innerHTML += '<h2>Hola</h2>'
//main.innerText += '<h2>Hola</h2>'

// main.innerHTML = ''

//console.dir(main)

const cartPanel = document.getElementById('cart-panel')
const cartBtn = document.getElementById('cart-btn')

cartBtn.addEventListener('click', (e) => {
	//console.log(e)

	console.log(cartPanel.classList.contains('active'))

	cartPanel.classList.add('active')
})
