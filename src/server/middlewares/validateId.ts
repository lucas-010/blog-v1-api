import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const uuidSchema = z.string().uuid({ message: "Deve ser um UUID válido" });

export const validateId = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const { id } = req.params;

	try {
		uuidSchema.parse(id);
		next();
	} catch (e: any) {
		res.status(400).json({ error: e.errors });
	}
};
