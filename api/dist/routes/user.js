"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Importo los controllers de cada ruta
const userController_1 = __importDefault(require("../controller/userController"));
// Rutas
router.get("/", userController_1.default.getUsers);
exports.default = router;
