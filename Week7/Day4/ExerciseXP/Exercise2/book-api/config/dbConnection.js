const knex = require('knex');

const db = knex({
	client:'pg',
	connection: {
		host: process.env.DB_HOSTNAME,
		port: process.env.DB_PORT,
		user: process.env.DB_NAME,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD
	}
});

async function testConnection() {
    try{
		const result = await db.raw('select version()');
		console.log ('connected to db');	
	} catch (error) {
        console.log('failed connecting to db');
		console.log(error);
	}
};

module.exports = {
    db,
    testConnection,
};