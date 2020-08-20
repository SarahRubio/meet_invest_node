const express = require('express')
const bodyParser = require('body-parser')
const mysql = require ('mysql');

let app = express()

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'meet_invest_bdd'
});

connection.connect (() => {
  console.log ('Connecté!');
});
