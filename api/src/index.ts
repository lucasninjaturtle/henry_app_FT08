import express from 'express'
const app = express();
import indexRoutes from './routes/index'
import "./database/models/index";
import cors from 'cors'

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

// Rutas
app.use(indexRoutes)

// Configuracion de Puerto
app.listen(3000)
console.log("El servidor inicio correctamente")