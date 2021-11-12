const big = document.getElementById('big')
const image = document.querySelectorAll('.image-gallery')

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener('click', () => {
    big.src = image[i].dataset.item
  })
}
