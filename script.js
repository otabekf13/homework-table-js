let stname = document.getElementById('stname').value
let age = document.getElementById('age').value
let btn = document.querySelector('button')
let form = document.forms.names
let delStudent = document.getElementById('delStudent')
let content = document.querySelector('.content')

// Модальное окно
let modal = document.getElementById("modal");
let editBtn = document.querySelectorAll("edit");
let closeBtn = document.getElementsByClassName("close")[0];

editBtn.onclick = function () {
	modal.style.display = "block";
}
closeBtn.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

//
let students = []
// нумерация
const nums = [...document.querySelectorAll('.id')]
nums.forEach((num, index) => num.innerHTML = ++index)

birth = 2022 - age


//
btn.onClick = (event) => {
	event.preventDefault()

	let student = {
		nums,
		stname,
		birth
	}
	students.push(student)
	reload(students)
}

function reload(arr) {
	content.innerHTML = ""

	for (let item of arr) {
		let num = document.createElement('span')
		let student = document.createElement('span')
		let birth = document.createElement('span')
		let actions = document.createElement('div')
		let edit = document.createElement('span')
		let delStudent = document.createElement('span')

		num.innerHTML = `${item.id}`
		student.innerHTML = item.name
		birth.innerHTML = item.age
		actions.classList.add('actions')
		edit.innerHTML = `<i class="fa - regular fa - pen - to - square"></i>`
		edit.setAttribute('id', 'edit')
		delStudent.innerHTML = `<i class="fa - regular fa - trash - can"></i>`
		delStudent.setAttribute('id', 'deleteStudent')

		content.append(num, student, birth, actions)
		actions.append(edit, delStudent)

		delStudent.onclick = () => {
			students = students.filter(elem => elem.id !== item.id)
			reload(students)
		}
	}
}


reload(students)