import express from 'express'
const app = express();
import indexRoutes from './routes/index'

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rutas
app.use(indexRoutes)

// Configuracion de Puerto
app.listen(3000)
console.log("El servidor inicio correctamente")