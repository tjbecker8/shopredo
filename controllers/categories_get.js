const db = require('../db.js')

module.exports = (req, res) => {
	db.query(`SELECT * FROM categories`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}
