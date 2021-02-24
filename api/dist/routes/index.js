"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Importo los controllers de cada ruta
const indexController_1 = require("../controller/indexController");
// Rutas
router.get("/users", indexController_1.getUsers);
exports.default = router;
