'use strict'
var express = require('express')
var pug = require('pug');
const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

let indexController = require("./routes/index_controller")
let aboutController = require("./routes/about_controller")

app.use("/", indexController)
app.use("/pug", indexController)

app.use("/about", aboutController)
app.use("/post", aboutController)
app.use("/company", aboutController)


app.listen(3000)

module.exports = app
