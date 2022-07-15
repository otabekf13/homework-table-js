import {openModal} from './modules/functions.js'
import {modalInput, modalInput_two} from './modules/functions.js'
export let id 

let form = document.forms.names
let content = document.querySelector('.content')
export let students = JSON.parse(localStorage.getItem('students')) || []



form.onsubmit = (event) => {
	event.preventDefault()

	let user = {
		id: Math.random(),
	}

	let fm = new FormData(form)

	fm.forEach((value, key) => {
		user[key] = value
	})


	user.born = new Date().getFullYear() - user.born

	students.push(user)
	reload(students)
	localStorage.setItem('students', JSON.stringify(students))
}



export function reload(arr) {
	content.innerHTML = ""

	for (let item of arr) {
		let div = document.createElement('div')
		let num = document.createElement('span')
		let student = document.createElement('span')
		let birth = document.createElement('span')
		let actions = document.createElement('div')
		let edit = document.createElement('img')
		let delStudent = document.createElement('img')

		num.innerHTML = arr.indexOf(item) + 1 + '.'
		student.innerHTML = item.name
		birth.innerHTML = item.born
		actions.classList.add('actions')
		div.classList.add('item')
		edit.src = "https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/edit_modify_write_pen-1024.png"
		delStudent.src = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-1024.png"
		edit.setAttribute('id', 'edit')
		delStudent.setAttribute('id', 'deleteStudent')


		actions.append(edit, delStudent)
		div.append(num, student, birth, actions)
		content.append(div)

		delStudent.onclick = () => {
			students = students.filter(elem => elem.id !== item.id)
			console.log(students);
			reload(students)
			localStorage.setItem('students', JSON.stringify(students))

		}

		edit.onclick = () => {
			id = item.id

			openModal()

			modalInput.value = item.name
			modalInput_two.value = new Date().getFullYear() - item.born 
			localStorage.setItem('students', JSON.stringify(students))
		}
		
	}
}


reload(students)



