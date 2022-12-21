
var admin = require("firebase-admin");
const express=require('express')
const app=express()


var serviceAccount = require("./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json");
app.use(express.json())
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.post('/send-noti',(req,res)=>{
    console.log(req.body)
   const message = {
    notification:{
        title:"new ad",
        body:"new ad posted click to open"
    },
    tokens:req.body.tokens
}

admin.messaging().sendMulticast(message).then(res=>{
    console.log('send success')
 }).catch(err=>{
     console.log(err)
 }) 
 })
 
 app.listen(3000,()=>{
     console.log('surver running')
 })
