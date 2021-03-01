"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// Importo los controllers de cada ruta
const githubController_1 = __importDefault(require("../controller/githubController"));
passport.use(new Strategy({
    clientID: '4cf64d15fe0157927482',
    clientSecret: '29f49913d133a27236e1021e860edd797d398d51',
    callbackURL: '/sucess'
}, function (accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
}));
// Rutas
router.get("/", githubController_1.default.getgithub);
exports.default = router;
