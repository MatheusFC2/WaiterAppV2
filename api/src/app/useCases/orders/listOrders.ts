import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
	try {
		const orders = await Order.find()
			.sort({ createdAt: 1 }) // filter ordenize order by last order
			.populate("products.product"); // here i doing show each product session

		res.status(201).json(orders);
	} catch (error) {
		console.log(error);
		res.status(500);
	}
}
