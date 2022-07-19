import {a, b, c} from './module/db.js'
//localStorage.peoples = JSON.stringify(peoples)

let formAdd = document.forms.formAdd
let addBtn = document.querySelector('.addBtn')
let young = document.querySelector('.young')
let middle = document.querySelector('.middle')
let others = document.querySelector('.others')

//let linkedPeoples = JSON.parse(localStorage.a) || []

//console.log(linkedPeoples);

formAdd.onsubmit = (e) => {
	e.preventDefault()

	let people = {
		id: Math.random()
	}

	let fm = new FormData(formAdd)

	fm.forEach((value, key) => {
		people[key] = value
	})

	let sort = {
		if(people.age < 25) {
		a.push(people)
		} else if(people.age < 24 && people.age > 51) {
		b.push(people)
		} else {c.push(people)}
	}

	// localStorage.peoples = JSON.stringify(peoples)

	reload(a, b, c)
}

function reload(arr) {
	young.innerHTML = ""
	middle.innerHTML = ""
	others.innerHTML = ""

	for (let item of arr) {
		let card = document.createElement('div')
		let name = document.createElement('span')
		let card_age = document.createElement('div')
		let age = document.createElement('p')
		let people_age = document.createElement('h4')

		card.classList.add('card')
		name.innerHTML = item.name
		card_age.classList.add('card_age')
		age.innerHTML = "Age"
		people_age.innerHTML = item.age

		if(people.age < 26){
			young.append(card)
			card.append(name, card_age)
			card_age.append(age, people_age)
		} else if (people.age > 25 && people.age < 51){
			middle.append(card)
			card.append(name, card_age)
			card_age.append(age, people_age)
		} else {
			others.append(card)
			card.append(name, card_age)
			card_age.append(age, people_age)
		}
	}
}


// reload(linkedPeoples)