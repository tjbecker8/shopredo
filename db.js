// require package
const {Client} = require('pg')

// create a connection to database
const db = new Client ({
	connectionString: 'postgres://Bepnm8:@localhost:5432/Shop'
})

//conect to database
db.connect((err)=> {
	if (err) {
		console.log('error connecting to PostgresSQL database');
	} else {
		console.log('connected to postgresSQL database')
	}
})

module.exports = db
