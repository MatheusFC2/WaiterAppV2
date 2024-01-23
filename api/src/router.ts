import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProducts } from "./app/useCases/products/createProducts";
import multer from "multer";
import path from "node:path";
export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, path.resolve(__dirname, "..", "uploads"));
		},
	}),
});

router.get("/categories", listCategories);

router.post("/categories", createCategory);

router.get("/products", listProducts);

router.post("/products", upload.single("image"), createProducts);

router.get("/categories/:categoryId/products", (req, res) => {
	res.send("OK");
});

router.get("/orders", (req, res) => {
	res.send("OK");
});

router.post("/orders", (req, res) => {
	res.send("OK");
});

router.patch("/orders/:orderId", (req, res) => {
	res.send("OK");
});

router.delete("/orders/:orderId", (req, res) => {
	res.send("OK");
});
