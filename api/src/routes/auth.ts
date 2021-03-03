import { Router } from 'express'
const router = Router()
var passport = require('passport');

// Importo los controllers de cada ruta
import auth from "../controller/authController"

// Rutas
router.get('/login/github', passport.authenticate('github'), (req, res, next) => {
    console.log(req.user)
}, auth.getAuth);


export default router;