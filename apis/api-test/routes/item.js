import express from "express";
const router = express.Router();
import { getItem, postItem, putItem, deleteItem } from "../controllers/item.js";

router.use((req, res, next) => {
	next();
});

router.get("/", (req, res) => {
	getItem();
	res.status(200).send();
});

router.post("/post", (req, res) => {
	const { item } = req.body;
	postItem(item);
	res.status(201).send();
});

router.put("/put/:item", (req, res) => {
	const { item } = req.params;
	putItem(item);
	res.status(202).send();
});

router.delete("/delete/:item", (req, res) => {
	const { item } = req.params;
	deleteItem(item);
	res.status(202).send();
});

export default router;
