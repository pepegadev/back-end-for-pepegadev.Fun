const express = require('express');
const bodyparser=require('body-parser');
require('dotenv').config('mysql')
var mysql = require('mysql');
const app =express();
app.use(express.json());
app.use(bodyparser.json());
const route =require('./routes/tokens');
const pop=require('./routes/sadge');
app.use('/tokens',route);
app.use('/users',pop);
var mysqlconnection = mysql.createConnection(
    {   
      host:'localhost',
      user:'pepecszq_popa',
      password:'dali21477983@',
      database:'pepecszq_token'   });
     mysqlconnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });








app.listen(5000,()=> console.log("ddddd"));

