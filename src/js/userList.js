import R from 'ramda'
import avatar from '../../assets/1.jpg'
import bg from '../../assets/download.jpg'

const container = document.getElementById('root')
const image = document.getElementById('image')
const customSort = R.curry(R.sort((a, b) => a.age - b.age))

image.src = bg

const showElement = (user) => {
	const div = document.createElement('div')
	const img = document.createElement('img')
	img.src = avatar
	div.appendChild(img)
	div.append(`${user.name} ${user.age}`)
	container.appendChild(div)
}
// comment
const userList = (users) => {
	R.forEach(showElement)(customSort(users))
}

export default userList
