import express from "express";
const app = express();
import indexRoutes from "./routes/index";
import session from "express-session";
import passport from "passport";
import { db } from "./database/models/index";
import cors from "cors";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const SESSION_SECRET = "secret_code_1234";

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
import passportConfig from "./passportConfig";
passportConfig(passport);

// Rutas
app.use(indexRoutes);

// // INICIO DB
db.sequelize
  .sync({ force: false })
  .then(() => console.log("Se conecto a la base de datos"))
  .catch(() => {
    throw "error";
  });

// INICIO SERVER
app.listen(5000);
console.log("El servidor inicio correctamente");
