const scrolltop = document.querySelector('.scrolltop')

window.onscroll = function () { scrollTopBtn() }

function scrollTopBtn () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrolltop.style.display = 'block'
  } else {
    scrolltop.style.display = 'none'
  }
}

scrolltop.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
