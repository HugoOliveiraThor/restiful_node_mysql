const categories = deps => {
	return {
		all: () => {
			return new Promise((resolve, reject) => {
				const { connection, errorHandler } = deps;
				connection.query('SELECT * from tb_categorias', (error, results) => {
					if (error) {
						errorHandler(error,'Falhar ao listar as categorias',reject);
						return false;
					} else {
						resolve({ categories: results });
					}
				});
			});
		},
		save: (name) => {
			return new Promise((resolve, reject) => {
				const { connection, errorHandler } = deps;
				connection.query('INSERT INTO tb_categorias (name) VALUES (?)', [name] , (error, results) => {
					if (error) {
						errorHandler(error,`Falhar ao salvar a categoria ${name}`,reject);
						return false;
					} else {
						resolve({ category: { name, id:results.insertId } });
					}
				});
			});
		},
		update: (id, name) => {
			return new Promise((resolve, reject) => {
				const { connection, errorHandler } = deps;
				connection.query('INSERT INTO tb_categorias (name) VALUES (?)', [name] , (error, results) => {
					if (error) {
						errorHandler(error,`Falhar ao salvar a categoria ${name}`,reject);
						return false;
					} else {
						resolve({ category: { name, id:results.insertId } });
					}
				});
			});
		},
		del: (id) => {
		},
	};
};
module.exports = categories;