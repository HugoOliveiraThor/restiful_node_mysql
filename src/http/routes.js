const db = require('../services/mysql');


const routes = (server) => {
	server.get('/', (req, res, next) => {
		res.send('Enjoy the silence');
		next();
	});
	server.get('categoria', async(req, res, next) => {
		try {
			res.send(await db.categories().all());
			next()
		} catch (error) {
			res.send(error);
			next()
		}
	});

	server.post('categoria', async(req, res, next) => {
		const { name } = req.params;
		try {
			res.send(await db.categories().save(name));
			next()
		} catch (error) {
			res.send(error);
			next()
		}
	});
	server.put('categoria', async (req, res, next) => {
		const { id, name } = req.params;
		try {
			res.send(await db.categories().update(id, name));
			next()
		} catch (error) {
			res.send(error);
			next()
		}
	});
	// server.delete('categoria', (req, res, next) => {
	// 	res.send();
	// 	next();
	// });
	// server.header('categoria', (req, res, next) => {
	// 	res.send();
	// 	next();
	// });
}
module.exports = routes;