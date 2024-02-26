const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const topBtn = document.querySelector('.gotop')

const header = document.querySelector('.header')
const about = document.querySelector('.about')
const advantages = document.querySelector('.advantages')
const buy = document.querySelector('.buy')
const price = document.querySelector('.price')
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')
const sunLight = document.querySelector('#sun-light')
const moonLight = document.querySelector('#moon-light')
const showIcons = document.querySelector('.icons')
const hideIcons = document.querySelector('.hide-icons')

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

moon.addEventListener('click', () => {
  header.classList.add('header__light')
  about.classList.add('about__light')
  advantages.classList.add('advantages__light')
  price.classList.add('price__light')
  buy.classList.add('buy__light')
  showIcons.classList.add('display__none')
  hideIcons.classList.remove('display__none')
})

sun.addEventListener('click', () => {
  header.classList.remove('header__light')
  about.classList.remove('about__light')
  advantages.classList.remove('advantages__light')
  price.classList.remove('price__light')
  buy.classList.remove('buy__light')
})

sunLight.addEventListener('click', () => {
  header.classList.remove('header__light')
  about.classList.remove('about__light')
  advantages.classList.remove('advantages__light')
  price.classList.remove('price__light')
  buy.classList.remove('buy__light')
  hideIcons.classList.add('display__none')
  showIcons.classList.remove('display__none')
})
