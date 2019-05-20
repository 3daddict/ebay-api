require('dotenv').config();
const express = require('express');
const ebay = require('ebay-api');

const app = express();

const appID = process.env.APP_ID;

ebay.xmlRequest({
    'serviceName': 'Shopping',
    'opType': 'GetSingleItem',
    'appId': appID,
    params: {
      'ItemID': '143088422463'
    }
  },
  function(error, data) {
    console.log('ID:', data.Item.ItemID);
    console.log('Title:', data.Item.Title);
    console.log('Price:', data.Item.ConvertedCurrentPrice.amount);
  });
  

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})