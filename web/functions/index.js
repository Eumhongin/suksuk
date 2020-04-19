const functions = require('firebase-functions');
let admin = require('firebase-admin')
const express = require('express')

const serviceKey = require('./config/serviceKey.json')


const app = express()


admin.initializeApp({
  credential: admin.credential.cert(serviceKey),
  databaseURL: "https://suksuk-7bdd7.firebaseio.com"
})



app.get('/', (req, res, next) => {
  res.json({
    msg: 'complte'
  })
})


exports.api = functions.https.onRequest(app);