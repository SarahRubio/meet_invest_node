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

con.connect(function() {
    try {
        console.log("Connected!");
    } catch(err) {
        console.log(err);
    }
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
//         var sql = "CREATE TABLE entrepreneurs (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), cp INT, city VARCHAR(255), country VARCHAR(255), mail VARCHAR(255), phone INT, raison_sociale VARCHAR(255), siret INT, capital_social INT, ca INT)";
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

// con.connect(function() {
//     try {
//         console.log("Connected!");
//         var sql = "CREATE TABLE projets (id INT AUTO_INCREMENT PRIMARY KEY, titre VARCHAR(255), description TEXT, financial_needs INT, other_needs TEXT, img VARCHAR(255), logo VARCHAR(255))";
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

// con.connect(function() {
//     try {
//         console.log("Connected!");
//         var sql = "CREATE TABLE investisseur (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), cp INT, phone INT, country VARCHAR(255), mail VARCHAR(255), risk VARCHAR(255), amount-to-invest INT, profitability INT, why_invest VARCHAR(255))";
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