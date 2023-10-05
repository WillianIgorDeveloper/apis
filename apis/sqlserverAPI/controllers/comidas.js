import { db } from "../db/conect.js";

export const getComidas = async () => {
	try {
		const result = await db.request().query("SELECT * FROM comidaBoa");
		return result.recordset;
	} catch (error) {
		console.log(error);
	}
};
