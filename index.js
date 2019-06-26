require('dotenv').config();
const express = require('express');
const ebay = require('ebay-api');
const mysql = require('mysql');
const fs = require('fs');

const app = express();

const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});
 
connection.connect(function(err) {
  if (err) {
    throw new Error('Error:', err);
  }
 
  console.log('connected!')
});

connection.query('SELECT * FROM `wp_posts`', function (error, results, fields) {
  if(error) {
    throw new Error('Error:', error);
  } 

  let data = JSON.stringify(results);  
  fs.writeFileSync('response.json', data);

});

const appID = process.env.APP_ID;

// ebay.xmlRequest({
//     'serviceName': 'Shopping',
//     'opType': 'GetSingleItem',
//     'appId': appID,
//     params: {
//       'ItemID': '143088422463'
//     }
//   },
//   function(error, data) {
//     console.log('ID:', data.Item.ItemID);
//     console.log('Title:', data.Item.Title);
//     console.log('Price:', data.Item.ConvertedCurrentPrice.amount);
// });


  

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})