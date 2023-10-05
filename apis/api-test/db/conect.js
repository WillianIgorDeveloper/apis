import sqlite3 from "sqlite3";
const sqlite = sqlite3.verbose();
export const db = new sqlite.Database("./db/mydb.db", (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Connected to the 'mydb.db' database.");
});

db.run(
	`CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)`
);
