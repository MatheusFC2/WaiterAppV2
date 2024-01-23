import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
	try {
		const { icon, name } = req.body;

		if (!name) {
			return res.status(400).json({ message: "Name is required" });
		}

		if (!icon) {
			return res.status(400).json({ message: "Icon is required" });
		}

		const category = await Category.create({ icon, name });

		res.status(201).json(category); // if result is 201, return the category.
	} catch (error) {
		console.log(error);
		res.status(500);
	}
}
