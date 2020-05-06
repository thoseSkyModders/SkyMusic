var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require("express");
//var cron = require("node-cron")
var nodemailer = require('nodemailer');
//-----------------------------//
var app = express();
var mongoKey = process.env.mongoDBKey
var awaitingVerification = []
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thoseskymodders@gmail.com',
      pass: process.env.pass
    }
  });
//



//
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var port = process.env.PORT || 8080
/*
cron.schedule('* * * * *', () => {
    for(let i=0;i<awaitingVerification.length;i++){
        awaitingVerification[i].timesChecked ++
        if(awaitingVerification[i].timesChecked > 5){
            console.log("deleted verification by: "+awaitingVerification[i].email)
             awaitingVerification.splice(i,1)
              i--
        }
    }
  });
  */
MongoClient.connect(mongoKey,  function(err, db1) {
    if (err) throw err;
    const db = db1.db("skyMusic");
//----------------------------------------------------------------------------------------------//
    app.get("/",function(req, res) {
        res.sendfile(__dirname+"/index.html")
    })
//----------------------------------------------------------------------------------------------//
app.post("/createAccount", async function(req, res) {
    var value = req.body;
    try{
        var colNames = await db.listCollections().toArray()
    }catch{
        res.send("Error while creating the account")
        return;
    }
    for(let i=0;i<colNames.length;i++){
        if(colNames[i].email == value.email){//checks if someone already registered with that mail
            res.send("This email is already in use")
            return;
        }
        if(colNames[i].username == value.username){//checks if someone already registered with that username
            res.send("This nickname is already in use")
            return;
        }
    }
    for(let i=0;i<awaitingVerification.length;i++){ //if there is already a request pending from this mail
        if(awaitingVerification[i].email == value.email){
            res.send("You have a pending verification, try again in 5 minutes") //request already existing
            return;
        }
    }
    sendVerificationCode(value)
    res.send(true) //sent verification, now it waits for next call from the user to verify the account
})
//----------------------------------------------------------------------------------------------//
    app.post("/verifyAccount", async function(req,res) {
        var value = req.body;
        let canProceed = false;
        var credentials;
        for(let i=0;i<awaitingVerification.length;i++){
            if(awaitingVerification[i].email == value.email){ //if there is a pending acceptation from this email
                if(awaitingVerification[i].code == value.code){ //if the code is correct
                    credentials = awaitingVerification[i]
                    awaitingVerification.splice(i,1)
                    canProceed = true;
                    break;
                }
            }
        }
        if(canProceed){
            console.log("Created account with name: "+credentials.username)
            db.createCollection(credentials.username,{capped: true, max:100, size: 5000000})
            var collection = db.collection(credentials.username)
            collection.insertOne({_id:0, username: credentials.username, password: credentials.password})
            res.send(true)
        }else{
            res.send("The code is not correct, try again!")
        }
    })
//----------------------------------------------------------------------------------------------//
    app.post("/login", async function(req,res) {
        var value = req.body;
        try{
            var users = await db.listCollections().toArray()
        }catch{
            res.send(false)
            return
        }
        var userExists = false
        for(let i=0;i<users.length;i++){
            if(users[i].name == value.username){ //checks if the username exists
                userExists = true;
            }
        }
        if(userExists){
            var collection = db.collection(value.username)
            var credentials = await collection.find({_id: 0}).toArray()
            if(credentials[0].password == value.password){
                console.log("login done by: "+value.username)
                res.send(true)
            }else{
                console.log("Failed login by: "+value.username)
                res.send(false)
            }
        }else{
            console.log("User: "+value.username+" doesn't exist!")
            res.send(false)
        }

    })

    var server = app.listen(port, () => {
    console.log("server is running on port", server.address().port);
    });
});
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
function sendVerificationCode(credentials){
    let verificationCode = ""
    for(var i=0;i<6;i++){
        verificationCode += Math.floor(Math.random()*9)
    }
    let verificationObj = {
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
        code: verificationCode,
        timesChecked : 0
    }
    var mailOptions = {
        from: 'thoseskymodders@gmail.com',
        to: credentials.email,
        subject: 'Verification',
        text: 'Your verification code is: '+verificationCode
      };
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          awaitingVerification.push(verificationObj)
        }
      });
}