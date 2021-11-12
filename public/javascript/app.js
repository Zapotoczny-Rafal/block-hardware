const menu = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu__container')
const btnClose = document.querySelector('.btn__close')
const body = document.body

menu.addEventListener('click', () => {
  menu.classList.add('open')
  menu.classList.add('hide')
  body.classList.add('translateX')
  body.style.overflow = 'hidden'
  menuContainer.classList.toggle('hide')
  menuContainer.classList.add('translateX-negative')
  btnClose.classList.add('open')
  body.classList.add('overlay')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('open')
  body.style.removeProperty('overflow')
  body.classList.remove('translateX')
  menuContainer.classList.toggle('hide')
  menuContainer.classList.remove('translateX-negative')
  menu.classList.remove('hide')
  btnClose.classList.remove('open')
  body.classList.remove('overlay')
})
