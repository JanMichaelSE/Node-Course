import { Router } from "express";
import path from "path";
import * as adminData from './admin';

const router = Router();

router.get("/", (req, res, next) => {
  console.log('Data on redirect-->', adminData.products);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

export default router;

