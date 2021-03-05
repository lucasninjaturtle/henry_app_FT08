import { Router } from "express";
const router = Router();
var passport = require("passport");

router.post("/login/local", passport.authenticate("local"), (req, res) => {
  if (req.isAuthenticated()) return res.sendStatus(200);
  res.sendStatus(401);
});

export default router;
