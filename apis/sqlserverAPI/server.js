import express from "express";
const server = express();
server.use(express.json());
const port = 2000;

import comidas from "./routes/comidas.js";
server.use("/comidas", comidas);

server.listen(port, () => {
	console.log(`Server listening at ${port}`);
});
