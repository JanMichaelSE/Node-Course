"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const router = express_1.Router();
router.get("/add-product", (req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "../", "views", "add-product.html"));
});
router.post("/product", (req, res, next) => {
    res.redirect("/");
});
exports.default = router;
