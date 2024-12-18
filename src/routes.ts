import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
	return res.json({ message: "Deu certo" });
});

export { router };
