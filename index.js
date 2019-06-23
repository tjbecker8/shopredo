const express = require('express')
const path = require('path')
const app = express()

const dp = require('./db')

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/products.html'))
	console.log('__dirname', __dirname)
})




app.listen(3000, () => {
	console.log('Server listening on port 3000');
})
