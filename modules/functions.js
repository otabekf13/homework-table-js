import {id} from '../script.js'
export let modal = document.getElementById("modal");
export let modal_bg = document.querySelector(".modal_bg");
export let buttonSave = modal.querySelector('button')
export let modalInput = modal.querySelector('input')
export let modalInput_two = modal.querySelectorAll('input')[1]

export function openModal() {
	modal.style.display = "flex"
	modal_bg.style.display = "block"

	setTimeout(() => {
		modal.style.transform = "translate(-50%, -50%) scale(1)"
		modal_bg.style.opacity = "1"
		modal.style.opacity = "1"
	}, 100);
}
export function closeModal() {
	modal.style.transform = "translate(-50%, -50%) scale(.2)"
	modal_bg.style.opacity = "0"
	modal.style.opacity = "0"
	
	setTimeout(() => {
		modal.style.display = "none"
		modal_bg.style.display = "none"
	}, 400);
}


buttonSave.onclick = () => {
	let item = students.find(item => item.id === id)

	item.name = modalInput.value
	item.born = new Date().getFullYear() - modalInput_two.value 

	reload(students)
	closeModal()
}

window.onclick = function (event) {
	if (event.target == modal_bg) {
		closeModal()
	}
}
