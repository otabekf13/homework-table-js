import {goods} from './module/db.js'
// localStorage.goods = JSON.stringify(goods)

let formAdd = document.forms.add
let show = document.querySelector('.show')
let right_menu = document.querySelector('.right_menu')
let cancel = document.querySelector('.cancel')
let content = document.querySelector('.content')

let linkedGoods = JSON.parse(localStorage.goods) || []

console.log(linkedGoods);

show.onclick = () => {
	right_menu.style.right = "0px"
}
cancel.onclick = () => {
	right_menu.style.right = "-100%"
}

formAdd.onsubmit = (e) => {
	e.preventDefault()

	let product = {
		id: Math.random()
	}

	let fm = new FormData(formAdd)

	fm.forEach((value, key) => {
		product[key] = value
	})
	
	goods.push(product)

	localStorage.goods = JSON.stringify(goods)

	reload(goods)
}

function reload(arr) {
	content.innerHTML = ""

	for (let item of arr) {
		let box = document.createElement('div')
		let product = document.createElement('span')
		let price = document.createElement('p')

		box.classList.add('box')
		product.innerHTML = item.name
		price.innerHTML = item.price

		content.append(box)
		box.append(product, price)
	}
}


reload(linkedGoods)