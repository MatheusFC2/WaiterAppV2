import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
	try {
		const categories = await Category.find();

		res.status(201).json(categories); // if result is 201, return the category.
	} catch (error) {
		console.log(error);
		res.status(500);
	}
}
