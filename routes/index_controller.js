'use strict';

const app = require('../index')
let Express = require("express")
let Router = Express.Router();

Router.get("/", function (req, res, next) {
	res.send("Index Page Controller :D")
});

Router.get('/pug', (req, res, next) => {
  res.render('index')
})

module.exports = Router;
