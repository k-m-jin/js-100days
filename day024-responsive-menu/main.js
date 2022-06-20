// RESPONSIVE MOBILE MENU
const menu = document.querySelector('.nav-list')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', showMenu)

function showMenu() {
  menu.classList.toggle('active')
}
