import bcrypt from "bcryptjs";
import { PassportStatic } from "passport";
import local from "passport-local";
const localStrategy = local.Strategy;
var GitHubStrategy = require("passport-github").Strategy;
import { adminAttributes } from "./database/models/Admin";

import { db } from "./database/models/index";

export default function (passport: PassportStatic) {
  passport.use(
    new localStrategy(
      {
        usernameField: "email"
      },
      (email, password, done) => {
        db.User.findOne({ where: { email } }).then((user) => {
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true || password === user.password) {
              return done(null, { data: { user: user }, type: "local-email" });
            } else {
              return done(null, false);
            }
          });
        });
      }
    )
  ),
    // guarda el user.id al cookie enviado al front
    passport.serializeUser((obj: any, cb) => {
      cb(null, obj);
    });

  let scopes = ["notifications", "user:email", "read:org", "repo", "repo:invite", "repo:status"];
  passport.use(
    new GitHubStrategy(
      {
        clientID: "4cf64d15fe0157927482",
        clientSecret: "29f49913d133a27236e1021e860edd797d398d51",
        // callbackURL: 'http://localhost:5000',
        callbackURL: "http://localhost:5000/auth/github/callback",
        scope: scopes.join(" ")
      },
      function (token, tokenSecret, profile, cb) {
        return cb(null, {
          data: {
            profile: profile,
            token: token
          },
          type: "github-token"
        });
      }
    )
  );

  // usa el id del cookie y
  // ( unicamente ) le añade 'user' al req (req.user)
  passport.deserializeUser((obj: any, cb) => {
    if (obj.type === "local-email") {
      db.Admin.findOne({ where: { id: obj.data.user.id }, include: { all: true } })
        .then((user) => {
          cb(false, user);
        })
        .catch((err) => cb(err, false));
    } else {
      // cb(null, obj.data);
      console.log(obj.data)
      db.Student.findOne({ where: { github: obj.data.user.username } })
        .then(user => {
          cb(null, user)
        })
        .catch((err) => {
          console.log(err)
          cb(err, false)
        });
    }
  });
}
