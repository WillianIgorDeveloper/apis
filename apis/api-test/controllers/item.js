import { db } from "../db/conect.js";

export const getItem = () => {
	db.all(`SELECT * FROM items`, [], (err, rows) => {
		if (err) {
			console.log(err.message);
			return;
		}
		console.log(rows);
		return;
	});
};

export const postItem = (item) => {
	db.run(`INSERT INTO items (name) VALUES (?)`, [item], function (err) {
		if (err) {
			console.log(err.message);
			return err.message;
		}
	});
	return "success";
};

export const putItem = (item) => {
	const editedItem = {
		put: item,
	};
};

export const deleteItem = (item) => {
	const deletedItem = {
		delete: item,
	};
};
