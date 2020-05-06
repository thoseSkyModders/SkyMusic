var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require("express");
var app = express();
var mongoKey = ""
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var port = process.env.PORT || 8080
MongoClient.connect(mongoKey,  function(err, db1) {
    if (err) throw err;
    const db = db1.db("skyMusic");
    app.get("/",function(req, res) {
        res.sendfile(__dirname+"/index.html")
    })
    app.post("/createAccount", async function(req, res) {
        var value = req.body;
        try{
            var colNames = await db.listCollections().toArray()
        }catch{
            res.send(false)
            return
        }
        for(let i=0;i<colNames.length;i++){
            if(colNames[i].name == value.username){
                res.send(false)
                return;
            }
        }
            console.log("Created account with name: "+value.username)
            db.createCollection(value.username,{capped: true, max:100, size: 5000000})
            var collection = db.collection(value.username)
            collection.insertOne({_id:0, username: value.username, password: value.password})
            res.send(true)
    })
    app.post("/login", async function(req,res) {
        var value = req.body;
        try{ //checks if the username exists
            var colNames = await db.listCollections().toArray()
        }catch{
            res.send(false)
            return
        }
        var userExists = false
        for(let i=0;i<colNames.length;i++){
            if(colNames[i].name == value.username){
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