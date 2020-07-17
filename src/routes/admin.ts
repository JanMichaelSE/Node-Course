import path from "path";
import { Router } from "express";

const router = Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  res.redirect("/");
});

export default router;
