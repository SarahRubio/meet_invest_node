const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'admin_2020',
    database: 'meetinvestdb'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});

const app = express();

// Create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE meetinvestdb';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('database created...')
    })
})

// Create entrepreneurs table
app.get('/createentrepreneurstable', (req, res) => {
  let sql = 'CREATE TABLE entrepreneurs (id INT AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), cp INT, city VARCHAR(255), country VARCHAR(255), mail VARCHAR(255), phone INT, raison_sociale VARCHAR(255), siret INT, capital_social INT, ca INT, PRIMARY KEY(id)';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Entrepreneurs table created');
  });
});

// db.connect(function() {
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

// db.connect(function() {
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


app.listen('3000', () => {
    console.log('server started on port 3000');
})
