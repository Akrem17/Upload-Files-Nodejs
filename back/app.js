var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 require('dotenv').config()
 var cors = require('cors')
var usersRouter = require('./routes/users');

var app = express();
const http = require("http");
const fs = require("fs");

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/images",express.static("images"));

app.use('/user', usersRouter);

console.log("App running at http://localhost:"+process.env.PORT)

module.exports = app;
