
var admin = require("firebase-admin");

var serviceAccount = require("./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const message = {
    notification:{
        title:"new Notification",
        body:"new ad posted"
    },
    token:'e5HIsn0mToC2oCDzjREfuf:APA91bFVeqNMs3kV-RwJInoyT3dS7RxKZmOsphh4K9IKGvJceNc0Czc6l0AsoGX55SfLZ2TFVrh5u-tTvEIOMVJMx7FZ0sPF3Owaii1BEXg33jGyqQBqdKRxOg0IvyoWxvy4xAGtcrsX'
}
admin.messaging().send(message).then(res=>{
    console.log("send success")
}).catch(err=>{
    console.log(err)
})
