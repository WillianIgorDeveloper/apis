import express from "express";
const router = express.Router();
import { getComidas } from "../controllers/comidas.js";

router.get("/", (req, res) => {
	const response = getComidas();
	res.send(response);
});

export default router;
