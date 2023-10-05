import express from "express";
const server = express();
server.use(express.json());
const port = 2000;

import item from "./routes/item.js";
server.use("/item", item);

server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
