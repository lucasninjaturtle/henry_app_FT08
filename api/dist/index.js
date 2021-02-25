"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
require("./database/models/index");
const cors_1 = __importDefault(require("cors"));
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
// Rutas
app.use(index_1.default);
// Configuracion de Puerto
app.listen(3000);
console.log("El servidor inicio correctamente");
