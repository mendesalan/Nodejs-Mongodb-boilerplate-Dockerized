'use strict'

let Express = require("express")
let Router = Express.Router()

Router.get("/", function (req, res, next) {
  res.send('About Controller Page')
});

Router.get("/company", function (req, res, next) {
  res.send('About Controller Company')
});

Router.post('/post', function (req, res, next) {
  res.send('About Post method post')
})

module.exports = Router
