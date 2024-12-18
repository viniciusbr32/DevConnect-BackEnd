import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import "express-async-errors";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return res.status(400).json({ error: err.message });
	}

	res.status(500).json({
		status: "error",
		message: "internal server Error",
	});
});

app.listen(3000, () => {
	console.log("Servidor Online");
});
