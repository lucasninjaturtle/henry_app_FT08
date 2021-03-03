import { Request, Response } from 'express'
import { QueryResult } from 'pg'

// var express = require('express');
// var passport = require('passport');
// var GitHubStrategy = require('passport-github').Strategy;

// passport.use(new GitHubStrategy({
//     clientID: '4cf64d15fe0157927482',
//     clientSecret: '29f49913d133a27236e1021e860edd797d398d51',
//     callbackURL: '/sucess'
// },
//     function (accessToken, refreshToken, profile, cb) {
//         // In this example, the user's Facebook profile is supplied as the user
//         // record.  In a production-quality application, the Facebook profile should
//         // be associated with a user record in the application's database, which
//         // allows for account linking and authentication with other identity
//         // providers.
//         return cb(null, profile);
//     }));

// passport.serializeUser(function (user, cb) {
//     cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
// });



const auth = {

    getAuth: function (req: Request, res: Response) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            console.log("Hola")
            return res.status(200).json("Hola")
        }
        catch (e) {
            console.log(e)
            return res.status(500).json("Error")
        }
    },

}

export default auth