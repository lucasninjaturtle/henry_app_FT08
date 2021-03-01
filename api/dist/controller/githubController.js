"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;
const github = {
    getgithub: function (req, res) {
        try {
            /* const response: QueryResult = await db.query('SELECT * FROM users');
            console.log(response.rows) */
            passport.authenticate('github');
            ;
            console.log("Hola");
            return res.status(200).json("Hola");
        }
        catch (e) {
            console.log(e);
            return res.status(500).json("Error");
        }
    },
};
exports.default = github;
