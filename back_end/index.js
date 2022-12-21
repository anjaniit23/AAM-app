
var admin = require("firebase-admin");
const express=require('express')
const app=express()

var serviceAccount = require("./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json");
const { response } = require("express");
app.use(express.json())
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.post('/send-noti',(req,res)=>{
    console.log(req.body)
//    const message = {
//     notification:{
//         title:"new ad",
//         body:"new ad posted click to open"
//     },
//     tokens:req.body.tokens
// }
for (var count = 0; count < req.body.tokens.length; count++){

    const message = {
        notification:{
            title:"new Notification",
            body:"new ad posted"
        },
        token:req.body.tokens[count]
    }
    admin.messaging().send(message).then(res=>{
        console.log("send success")
    }).catch(err=>{
        console.log(err)
    })
    

}



// admin.messaging().sendMulticast(message).then(res=>{
//     console.log('send success')
//  }).catch(err=>{
//      console.log(err)
//  }) 
 })
 
 
 app.listen(3000,()=>{
     console.log('server running')
     
 })

 /* */
 


// var admin = require("firebase-admin");

// var serviceAccount = require("./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// const message = {
//     notification:{
//         title:"new Notification",
//         body:"new ad posted"
//     },
//     token:'e5HIsn0mToC2oCDzjREfuf:APA91bFVeqNMs3kV-RwJInoyT3dS7RxKZmOsphh4K9IKGvJceNc0Czc6l0AsoGX55SfLZ2TFVrh5u-tTvEIOMVJMx7FZ0sPF3Owaii1BEXg33jGyqQBqdKRxOg0IvyoWxvy4xAGtcrsX'
// }
// admin.messaging().send(message).then(res=>{
//     console.log("send success")
// }).catch(err=>{
//     console.log(err)
// })

//  app.listen(3000,()=>{
//      console.log('server running')
//  }
//  )