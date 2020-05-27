/*
Author: Christopher Ermel - 200250446
Name: example-node.js
Version: 1.0.0
Date: 5/27/2020
*/

//express
const express = require('express');
const app = express();

//libary for api requests
const https = require('https');

app.get('/', (request, responce) => {
    //This is a callback
    https.get('https://insult.mattbas.org/api/insult', resp => {
        resp.on('data', chunk => {
            responce.send(`
                <http>
                    <head><title>Oh Snap!</title></head>                    
                    <body>
                        <h1> OH SNAP!</h1>
                        <p style="font-size: 24px; color: darkred;">
                            ${chunk.toString()}!
                        </p>
                    </body>
                </http>
            `);
        });
    });
})
//for heroku ports
app.listen(process.env.PORT || 3000);