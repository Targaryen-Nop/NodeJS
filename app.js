const express = require("express");
const mustache = require('mustache-express')
const app = express();

app.engine('html',mustache())
app.set('view engine','html')

const indexRouter = require('./routes/index')

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static('static'))
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter);

// Execrise 1
function x() {
  console.log("a");
}
function y() {
  console.log("b");
}
function z(f) {
  f();
}
z(x);



module.exports = app;