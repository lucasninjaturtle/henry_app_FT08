import { Router } from 'express'
const router = Router()
var passport = require('passport');
// var GitHubStrategy = require('passport-github').Strategy;

// Importo los controllers de cada ruta
// import auth from "../controller/authController"

// Rutas
// router.get("/login/github", auth.getAuth)
router.get('/login/github',
    passport.authenticate('github'), (req, res, next) => {
        console.log("=======================")
    }
);


export default router;