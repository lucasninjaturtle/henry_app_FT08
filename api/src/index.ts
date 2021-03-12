import express from "express";
const app = express();
import indexRoutes from "./routes/index";
import session from "express-session";
import passport from "passport";
import { db } from "./database/models/index";
import passportConfig from "./passportConfig";
import cors from "cors";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
  session({
    secret: "henryapp",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// Rutas
app.use(indexRoutes);

// // INICIO DB
db.sequelize
  .sync({ force: true })
  .then(() => console.log("Se conecto a la base de datos"))
  .catch(() => {
    throw "error";
  });

// INICIO SERVER
app.listen(5000);
console.log("El servidor inicio correctamente");
