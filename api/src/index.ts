import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

const app = express();

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => {
		const port = 3001;

		app.use(express.json());
		app.use(router);

		app.listen(port, () => {
			console.log(`listening on http://localhost:${port}`);
		});
		console.log("connected to mongodb");
	})
	.catch((err) => console.log(err));
