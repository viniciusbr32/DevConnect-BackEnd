import { Router, type Request, type Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
	return res.json({ message: "Deu certo" });
});

// Usuarios

router.post("/users", new CreateUserController().handle);

export { router };
