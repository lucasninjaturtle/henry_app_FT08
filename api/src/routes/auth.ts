import { Router } from "express";
const router = Router();
var passport = require("passport");

// Importo los controllers de cada ruta
import { authController } from "../controller/authController";

////////////////////////
//// LOGIN WEB APP /////
////////////////////////

router.post(
  "/login/local",
  passport.authenticate("local"),
  authController.webappAuth
);

///////////////////////////
//// LOGIN APP MOBILE /////
///////////////////////////

router.post("/githubcode", authController.githubCode);
router.post("/githubUser", authController.githubUser);

export default router;
