const express = require('express')
const bodyParser = require('body-parser')
const mysql = require ('mysql')

let app = express()

const con = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'meet_invest_bdd',
});

// con.connect(function() {
//     try {
//         console.log("Connected!");
//         con.query("CREATE DATABASE meet_invest_bdd", function (err, result) {
//             console.log("Database created");
//         });
//     } catch(err) {
//         console.log(err);
//     }
//  });

// con.connect(function() {
//     try {
//         console.log("Connected!");
//         var sql = "CREATE TABLE entrepreneurs (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), cp INT, city VARCHAR(255), country VARCHAR(255), mail VARCHAR(255), phone INT)";
//         con.query(sql, function (err, result) {
//             try {
//                 console.log("Table created");
//             } catch(err) {
//                 if (err) throw err;
//             }
//         });    
//     } catch(err) {
//         if (err) throw err;
//     } 
// });

app.listen(8080, () => {
    console.log("serveur lancé")
})