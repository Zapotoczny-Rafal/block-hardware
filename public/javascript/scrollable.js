const palette = document.querySelector('.palette')

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const scrollablePalette = scrollable / 2

  if (window.scrollY > scrollablePalette) {
    palette.classList.remove('palette-hide')
    palette.classList.add('show')
    palette.style.opacity = '1'
  } else {
    palette.classList.add('palette-hide')
    palette.classList.remove('show')
    palette.style.opacity = '0.5'
  }
},
{ passive: true }
)
