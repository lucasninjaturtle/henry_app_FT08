import express from "express";
const app = express();
import indexRoutes from "./routes/index";
import { db } from "./database/models/index";
import cors from "cors";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Rutas
app.use(indexRoutes);

// INICIO DB
db.sequelize
  .sync({ force: true })
  .then(() => console.log("Se conecto a la base de datos"))
  .catch(() => {
    throw "error";
  });

// INICIO SERVER
app.listen(3000);
console.log("El servidor inicio correctamente");
