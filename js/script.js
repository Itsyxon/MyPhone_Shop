const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const topBtn = document.querySelector('.gotop')
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
})

window.addEventListener('scroll', () => {
  let scrolled = window.scrollY
  scrolled >= 1500
    ? topBtn.classList.add('gotop-show')
    : topBtn.classList.remove('gotop-show')
})

topBtn.addEventListener('click', () => {
  window.scrollTo(0, 0)
})
