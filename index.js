const express = require('express')
const path = require('path')
const app = express()

const dp = require('./db')

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	// console.log('__dirname', __dirname)
})

app.get('/api/products', require('./controllers/products_get.js'))
app.get('/api/categories', require('./controllers/categories_get.js'))
app.get('/api/click/:id', require('./controllers/click_get.js'))

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
