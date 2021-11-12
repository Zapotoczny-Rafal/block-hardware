const path = require('path')
const express = require('express')
const methodOverride = require('method-override')

const port = process.env.PORT || '4000'

const app = express()

app.set('port', port)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})
app.get('/categories', (req, res) => {
  res.render('category', { title: 'Categories' })
})
app.get('/favorited', (req, res) => {
  res.render('favorited', { title: 'Favorited' })
})
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' })
})
app.get('/cart', (req, res) => {
  res.render('cart', { title: 'Cart' })
})
app.get('/products', (req, res) => {
  res.render('products', { title: 'Products' })
})
app.get('/motherboards', (req, res) => {
  res.render('motherboards', { title: 'Motherboards' })
})
app.get('/processors', (req, res) => {
  res.render('processors', { title: 'Processors' })
})
app.get('/smartphones', (req, res) => {
  res.render('smartphones', { title: 'Smartphones' })
})
app.get('/smartwatch', (req, res) => {
  res.render('smartwatch', { title: 'Smartwatch' })
})
app.get('/gigabyte-b450-auros-elite', (req, res) => {
  res.render('gigabyte-b450-auros-elite', { title: 'gigabyte-b450-auros-elite' })
})

app.listen(port, err => {
  if (err) {
    throw err
  }
  console.log(`server listening on http://localhost:${port}`)
})
