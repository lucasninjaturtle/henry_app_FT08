import { Router } from "express";
const router = Router();
var passport = require("passport");

// Importo los controllers de cada ruta
import { authController } from '../controller/authController'

////////////////////////
//// LOGIN WEB APP /////
////////////////////////

router.post("/login/local", passport.authenticate("local"), authController.webappAuth);

///////////////////////////
//// LOGIN APP MOBILE /////
///////////////////////////

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github',
{ successRedirect: "/github/test", failureRedirect: '/auth/github' }));

export default router;
