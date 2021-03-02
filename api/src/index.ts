import express from "express";
const app = express();
import indexRoutes from './routes/index'
import { db } from "./database/models/index";
import cors from 'cors'
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
    clientID: '4cf64d15fe0157927482',
    clientSecret: '29f49913d133a27236e1021e860edd797d398d51',
    callbackURL: '/auth/login/github'
},
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, { id: 1 });
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())



// Rutas
app.use(indexRoutes);

// INICIO DB
db.sequelize
    .sync({ force: true })
    .then(() => console.log("Se conecto a la base de datos"))
    .catch(() => {
        throw "error";
    });

// INICIO SERVER
app.listen(3000)
console.log("El servidor inicio correctamente")
