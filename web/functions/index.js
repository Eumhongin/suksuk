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
    msg: 'complete'
  })
})

app.get('/vaccine',(req,res,next) => {
  admin.database().ref('vaccine').once('value',(snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.key)
      const vaccine = snapshot.val()
      res.status(200).json({
        count : snapshot.numChildren(),
        status : true,
        devMsg : 'Read Complete',
        data : vaccine,
     
      })
    } else {
      res.status(400).json({
        msg : 'data does exists'
      })
    }
  }).catch((err) => {
    res.status(400).json({
      code : err.code,
      message : err.message
    })
  })
})


exports.api = functions.https.onRequest(app);