"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.router = void 0;
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
const products = [];
exports.products = products;
router.get("/add-product", (req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "..", "views", "add-product.html"));
});
router.post("/add-product", (req, res, next) => {
    let formValue = req.body;
    products.push(formValue.title);
    res.redirect("/");
});
