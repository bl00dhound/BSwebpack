import R from 'ramda'
// import big from '../assets/big.jpg'

const container = document.getElementById('root')
const customSort = R.curry(R.sort((a, b) => a.age - b.age))
let numImg = 0


const showElement = (user) => {
  const div = document.createElement('div')
  const img = document.createElement('img')
  img.src = `http://lorempixel.com/50/50`
  div.appendChild(img)
  div.append(`${user.name} ${user.age}`)
  container.appendChild(div)
}

const userList = (users) => {
  R.forEach(showElement)(customSort(users))
}

export default userList;


// function userList(users) {
// const container = document.getElementById('root');
// const sortedUsers = R.sort((a, b) => a - b, users);
// this.showList = () => {
//   sortedUsers.forEach((user) => {
//     const div = document.createElement("div");
//     div.append(user.name + ' ' + user.age);
//     container.appendChild(div);
//   });
// }
// }
