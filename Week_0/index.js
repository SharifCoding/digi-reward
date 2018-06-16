const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const getAuthorise = require('./controllers/getAuthorise');
const getCallback = require('./controllers/getCallback');
const getAccounts = require('./controllers/getAccounts');
const getTransactions = require('./controllers/getTransactions');

global.accessToken = null;

app.get('/', getAuthorise);

app.get('/oauth/callback', getCallback);

app.get('/accounts', getAccounts);

app.get('/transactions/:acc_id', getTransactions);

app.listen(3000, () => {
  console.log('server listening on http://127.0.0.1:3000');
});
