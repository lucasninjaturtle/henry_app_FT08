import bcrypt from "bcryptjs";
import { PassportStatic } from "passport";
import local from "passport-local";
const localStrategy = local.Strategy;
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
            if (err) return done(err); // throw err -> esto nop;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      }
    )
  );

  // guarda el user.id al cookie enviado al front
  passport.serializeUser((user: adminAttributes, cb) => {
    cb(null, user.id);
  });

  // usa el id del cookie y
  // ( unicamente ) le añade 'user' al req (req.user)
  passport.deserializeUser((id, cb) => {
    db.Admin.findOne({ where: { id }, include: { all: true } })
      .then((user) => {
        cb(false, user);
      })
      .catch((err) => cb(err, false));
  });
}
