import path from "path";
import { Router } from "express";
import { lchmod } from "fs";

const router = Router();

const products: string[] = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  let formValue = req.body;
  products.push(formValue.title)
  res.redirect("/");
});

export {
  router,
  products
}
