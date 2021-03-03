"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Importo los controllers de cada ruta
const githubController_1 = __importDefault(require("../controller/githubController"));
// Rutas
router.get("/", githubController_1.default.getgithub);
router.get("/test", githubController_1.default.test);
exports.default = router;
