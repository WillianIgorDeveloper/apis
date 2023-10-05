import sql from "mssql";

const connectionConfig = {
	user: "sa",
	password: "inove7979",
	server: "localhost",
	database: "mydb",
	port: 1433,
	options: {
		trustServerCertificate: true,
	},
};

const connect = async () => {
	try {
		const db = await new sql.connect(connectionConfig);
		console.log("Connected to the 'mydb.db' database.");
		return db;
	} catch (error) {
		console.log(error);
	}
};

export const db = await connect();
