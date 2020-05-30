const MongoClient = require('mongodb').MongoClient;
const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require("express");
const nodemailer = require('nodemailer');
const hash = require('sha1');
const { uuid } = require('uuidv4');
//-----------------------------//
let app = express();
let discordToken =  process.env.discordToken
let mongoKey = process.env.mongoDBKey
let emailPassword = process.env.pass
var awaitingVerification = []
var resetverification = []
/* ------------------------------------------------------->*/ var inLocalhost = true
//If you want to edit something, just put inLocalhost = true and it will let you use the website without the account system
app.enable('trust proxy');
if(!inLocalhost){
    app.use((req, res, next) => {
            if (req.header('x-forwarded-proto') !== 'https'){
                res.redirect(`https://${req.header('host')}${req.url}`)
            }else{
                next()
            }
        })
}else{
    /*
    mongoKey = ""
    discordToken = ""
    emailPassword = ""
    */
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thoseskymoddersv@gmail.com',
      pass: emailPassword
    }
  });
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var port = process.env.PORT || 8080
setInterval(() => {
    removeUnusedVerification()
}, 60000);

 //----------------------------------------------------------------------------------------------//

 function removeUnusedVerification(){
    for(let i=0;i<awaitingVerification.length;i++){
        awaitingVerification[i].timesChecked ++
        if(awaitingVerification[i].timesChecked > 5){
            console.log("deleted verification by: "+awaitingVerification[i].email)
             awaitingVerification.splice(i,1)
              i--
        }
    }
    for(let i=0;i<resetverification.length;i++){
        resetverification[i].timesChecked ++
        if(resetverification[i].timesChecked > 5){
            console.log("deleted reset by: "+resetverification[i].email)
            resetverification.splice(i,1)
              i--
        }
    }
 }
 
 //----------------------------------------------------------------------------------------------//

 app.get("/",function(req, res) {
    res.sendFile(__dirname+"/index.html")
})
var server = app.listen(port, () => {
    console.log("server is running on port", server.address().port);
    });
//----------------------------------------------------------------------------------------------//
var botIsOnline = false
if(!inLocalhost){
MongoClient.connect(mongoKey,  function(err, db1) {
    try{
        //bot.login(discordToken);
        bot.on("ready",()=>{
            bot.user.setActivity("errors", {type: "LISTENING" })
            console.log("The bot is online!");
            botIsOnline = true
        });
    }catch{
        console.log("Error with the bot")
    }
    function reportError(msg){  
        if(!botIsOnline) return;
        try{
        var errorChannel = bot.channels.cache.get("708298853316558999")
        let embed = new Discord.MessageEmbed()
        embed.setTitle("WARNING")
        .setDescription(msg)
        .setColor(15158332)
        errorChannel.send({embed})
        }catch{console.log("Error with the bot!")}
    }
    if (err) throw err;
    const db = db1.db("skyMusic");
//----------------------------------------------------------------------------------------------//
app.post("/createAccount", async function(req, res) { //error is handled
    var canProceed = true;
    var value = req.body;
    try{
    value.email = value.email.toLowerCase()
    if(value.password.length < 6){//checks lenght of password
        res.send("Password must be minimum 5 characters")
        canProceed = false;
        return;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)){ //check validity of email
        res.send("Invalid email")
        canProceed = false;
        return;
    }
    if(value.email.includes("$")){//checks validity of email
        res.send("Invalid email, it must not contain a $")
        return;
    }
    }catch(e){
        res.send("Error in credentials!")
        console.log(e)
        canProceed = false;
    }
    try{
        for(let i=0;i<awaitingVerification.length;i++){ //if there is already a request pending from this mail
            if(awaitingVerification[i].email == value.email){
                res.send("You have a pending verification, try again in 5 minutes") //request already existing
                canProceed = false;
                break;
            }
        }
        var savedEmails = await db.listCollections().toArray()
    }catch(e){
        res.send("Error while creating the account")
        reportError(e)
        canProceed = false;
    }
    try{
        for(let i=0;i<savedEmails.length;i++){
            if(savedEmails[i].name == value.email){//checks if someone already registered with that mail
                res.send("This email is already in use")
                canProceed = false;
                break;
            }
        }
    }catch(e){
        res.send("Error!")
        console.log(e)
        canProceed = false;
        return;
    }
    if(canProceed) sendVerificationCode(value,res) //sent verification, now it waits for next call from the user to verify the account
})
//----------------------------------------------------------------------------------------------//
    app.post("/verifyAccount", async function(req,res) { //error is handled
        var value = req.body;
        let canProceed = false;
        var credentials;
        try{
            for(let i=0;i<awaitingVerification.length;i++){
                if(awaitingVerification[i].email == value.email){ //if there is a pending verification from this email
                    if(awaitingVerification[i].code == value.code){ //if the code is correct
                        credentials = awaitingVerification[i]
                        awaitingVerification.splice(i,1)
                        canProceed = true;
                        break;
                    }
                }
            }
        }catch(e){
            res.send("Error!")
            console.log(e)
            reportError(e)
            return;
        }
        if(canProceed){
            try{
                console.log("Created account with name: "+credentials.email)
                await db.createCollection(credentials.email).catch()
                var collection = db.collection(credentials.email)
                var passwordseed = makeseed(20)
                var finalhash = hash(hashwithseed(credentials.password, passwordseed))
                if(finalhash != null){
                await collection.insertOne({_id:0, email: credentials.email, password: finalhash, seed: passwordseed})
                }
            }catch{
                res.send("Error!")
            }
            res.send(true)
        }else{
            res.send("The code is not correct, try again!")
        }
    })
//----------------------------------------------------------------------------------------------//
app.post("/login", async function(req,res) { //error handles
    var value = req.body;
    //checks email length
    try{
        if(value.email.length > 64 || value.password.length > 128 || value.password.length < 5) {
            console.log("Invalid email or password length. Attempted username or password length : "+value.email.length+":"+value.password.length)
            res.send("Invalid credentials")
            return;
        } 
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)){
            console.log("Invalid email")
            res.send("Invalid email")
            return;
        }    
    }catch(e){
        res.send("Error!")
        console.log(e)
        return;
    }   
    try{
        var users = await db.listCollections().toArray()
    }catch{
        res.send("Error trying to Login!")
        return
    }
    var userExists = false
    for(let i=0;i<users.length;i++){
        if(users[i].name == value.email){ //checks if the username exists
            userExists = true;
            break;
        }
    }
    if(userExists){
        try{
            var collection = db.collection(value.email)
            var credentials = await collection.find({_id: 0}).toArray()
        }catch{
            res.send("Credentials wrong!")
            return;
        }
        try{
            if(checkPassword(value.password,credentials[0].password,credentials[0].seed)){
                console.log("login done by: "+value.email)
                res.send(true)
            }else{
                console.log("Failed login by: "+value.email)
                res.send("Credentials wrong!")
            }
        }catch(e){
            res.send("Credentials wrong!")
            console.log(e)
        }
    }else{
        console.log("User: "+value.email+" doesn't exist!")
        res.send("Credentials wrong!")
    }
})  
    app.post("/resetPassword", async function(req,res) {
    var canProceed = false;
    var value = req.body;
    try{
        value.email = value.email.toLowerCase()
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)){ //check validity of email
            res.send("Invalid email")
            canProceed = false;
            return;
        }
        if(value.email.includes("$")){//checks validity of email
            res.send("Invalid email, it must not contain a $")
            return;
        }
    }catch(e){
        res.send("Error in email!")
        console.log(e)
        canProceed = false;
    }
    try{
        for(let i=0;i<resetverification.length;i++){ //if there is already a request pending from this mail
            if(resetverification[i].email == value.email){
                res.send("You have a pending reset verification, try again in 5 minutes") //request already existing
                canProceed = false;
                return;
            }
        }
        var savedEmails = await db.listCollections().toArray()
    }catch(e){
        res.send("Error while checking the account")
        canProceed = false;
    }
    try{
        for(let i=0;i<savedEmails.length;i++){
            if(savedEmails[i].name == value.email){//checks if someone already registered with that mail
                canProceed = true;
                break;
            }
        }
    }catch(e){
        res.send("Error!")
        console.log(e)
        canProceed = false;
        return;
    }
    if(canProceed) sendresetlink(value,res) //sent verification, now it waits for next call from the user to reset password
    if(!canProceed) res.send("No email registered!")
    })
//----------------------------------------------------------------------------------------------//
    app.post("/getSongs", async function(req,res) { //error handled
        var value = req.body;
        try{
            var collection = db.collection(value.email)
            var credentials = await collection.find({_id: 0}).toArray()
        }catch(e){
            res.send("Error with the server!")
            console.log("error with the server"+e)
            return
        }
        if(credentials == undefined){
            res.send("Credentials wrong")
            console.log("credentials wrong")
            return;
        }
        try{
            if(checkPassword(value.password,credentials[0].password,credentials[0].seed)){
                var allSongs = await collection.find().toArray()
                    allSongs.splice(0,1) //removes the credentials
                var songsToSend = []
                    for(var i=0;i<allSongs.length;i++){
                        songsToSend.push(allSongs[i].song)
                    }
                    res.send(songsToSend)
                    console.log("songs sent to: "+value.email)
            }else{
                res.send("Credentials are wrong!")
            }
        }catch(e){
            res.send("Error!")
            console.log(e)
        }
    })
//----------------------------------------------------------------------------------------------//
    app.post("/saveSongs", async function(req,res) {
        var value = req.body;
        if(JSON.stringify(value).length > 30000){ //if it's longer than 30000 characters, to prevent too big files from being uploaded
            res.send("Song is too large, it can't be uploaded")
            return;
        }
        try{
            var collection = db.collection(value.email)
            var credentials = await collection.find({_id: 0}).toArray()
        }catch(e){
            res.send("Error with the account!")
            return;
        }
        if(credentials == undefined){
            res.send("Credentials wrong")
            return;
        }
        console.log("limit the amount of songs u can store")
        var alreadySavedSongs = ""
        try{
            if(checkPassword(value.password,credentials[0].password,credentials[0].seed)){
                for(var i=0; i<value.song.length;i++){
                    var isSongSaved = await collection.find({name: value.song[i].name}).toArray()
                    if(isSongSaved.length == 0){
                      await collection.insertOne({song: value.song[i], name: value.song[i].name})
                    }else{
                        alreadySavedSongs += "<br>"+value.song[i].name + " was already saved"
                    }
                }   
                    res.send("Added songs" + alreadySavedSongs)
                    console.log("added songs!" + alreadySavedSongs)
            }else{
                res.send("Credentials are wrong!")
            }
        }catch(e){
            res.send("Error!")
        }
    })
//----------------------------------------------------------------------------------------------//
app.post("/deleteSong", async function(req,res) { //error handled
    var value = req.body;
    try{
        var collection = db.collection(value.email)
        var credentials = await collection.find({_id: 0}).toArray()
    }catch(e){
        reportError(e)
        res.send("Error with the server!")
        console.log("error with the server")
        return
    }
    if(credentials == undefined){
        res.send("Credentials wrong")
        console.log("credentials wrong")
        return;
    }
    try{
        if(checkPassword(value.password,credentials[0].password,credentials[0].seed)){
          await collection.deleteOne({name: value.songName})
        }else{
            res.send("Credentials are wrong!")
            return;
        }
        }catch{
            res.send("Error!")
            return;
        }
        res.send("Song :"+value.songName+" deleted!")
        console.log("song deleted")
})
app.post("/verifyResetCode", async function(req,res) { //error is handled
    var value = req.body;
    let canProceed = false;
    var customMessage = ""
    if(value.password.length < 6){
        res.send("Password needs to be at least 6 characters long!")
        return;
    }
    if(value.password != value.passwordConfirm){
        res.send("Passwords don't match!")
        return;
    }
    customMessage = "Request doesn't exist"
    try{
        for(let i=0;i<resetverification.length;i++){
            if(resetverification[i].email == value.email){
                customMessage = "Code is not correct!"
                if(resetverification[i].code == value.code){
                    canProceed = true;
                }
            }
       }
    }
    catch(e){
        res.send("Error!")
        console.log(e)
        return;
    }
    if(canProceed){
        try{
            let collection = db.collection(value.email)
            let passwordseed = makeseed(20)
            let finalhash = hash(hashwithseed(value.password,passwordseed))
            if(finalhash != null){
            await collection.updateOne({_id:0}, {$set: {password: finalhash, seed: passwordseed}}).catch()
            console.log("Successfully reset "+value.email+"'s password")
            res.send(true)
            }
        }catch(e){
            console.log(e)
            res.send("Error!")
        }
    }else{
        res.send("The code is not correct, try again!")
    }
})
});
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname+"/public/errorLoading.html")
});
}
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
function sendVerificationCode(credentials,res){ //error handled
    let verificationCode = ""
    for(var i=0;i<6;i++){
        verificationCode += Math.floor(Math.random()*9)
    }
    try{
        let verificationObj = {
            email: credentials.email,
            password: credentials.password,
            code: verificationCode,
            timesChecked : 0
        }
    var mailOptions = {
        from: 'thoseskymodders@gmail.com',
        to: credentials.email,
        subject: 'Verification',
        html: '<center><h1>Your code is: <font style="color: rgba(22, 22, 22, 0.65);">'
            +verificationCode
            +'</font></h1></center>'
      };
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Error in sending email");
          res.send("Error!")
        } else {
          console.log('Email sent: ' + info.response);
          awaitingVerification.push(verificationObj)
          res.send(true)
        }
      });
    }catch(e){
        res.send("Error!")
        return;
    }
}
function hashwithseed(string, randomseed) {
    var increment = 3;
    var input = randomseed + string;
    var output = "";
    try{
    while (increment < input.length) {
      if (increment % 2 == 0) {
        var output = output + input.charAt(increment);
      } else {
        var output = input.charAt(increment) + output;
      }
      increment++;
    }
    return output;
    }catch(e){
        console.log(e)
        return false
    }
  }
  function checkPassword(password,DBpassword,DBseed){
    try{
        var inputwithseed = hash(hashwithseed(password,DBseed))
        if(DBpassword == inputwithseed){
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e)
        return false
    }
  }
  //----------------------------------------------------------------------------------------------//
  function sendresetlink(credentials,res){ //error handled
    let resetToken = ""
    try{
        resetToken = uuid()
        let verificationObj = {
            email: credentials.email,
            code: resetToken,
            timesChecked : 0
        }
        console.log(verificationObj)
    var mailOptions = {
        from: 'thoseskymodders@gmail.com',
        to: credentials.email,
        subject: 'Password Reset',
        html: '<center><h1>Your password reset code is : <font style="color: rgba(22, 22, 22, 0.65);">'
            +resetToken
            +'</font></h1></center>'
      };
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Error in sending email");
          res.send("Error!")
        } else {
          console.log('Email sent: ' + info.response);
          resetverification.push(verificationObj)
          res.send(true)
        }
      });
    }catch(e){
        console.log(e)
        res.send("Error!")
        return;
    }
}
//--------------------------------------------------------------------------------------------------------//
function makeseed(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
 }
 //--------------------------------------------------------------------------------------------------------//