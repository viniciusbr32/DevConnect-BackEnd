import express, { Router, type Request, type Response } from "express";

const router = express.Router();

router.get("/teste", (req: Request, res: Response) => {
	res.send({ message: true });
	return;
});

export { router };
