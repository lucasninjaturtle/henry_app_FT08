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

router.post('/githubcode', authController.githubCode)

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github',
    {
        successRedirect: "/github/redirect",
        // successRedirect: "exp://192.168.0.145:19000",
        failureRedirect: '/auth/github'

    }),
);

router.get('/github/redirect', async (req, res, next) => {
    console.log(req.user)
    res.redirect("exp://192.168.0.145:19000")
})

export default router;
