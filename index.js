const MongoClient = require('mongodb').MongoClient;
const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require("express");
const nodemailer = require('nodemailer');
const hash = require('sha1');
const crypto = require('crypto');
const { uuid } = require('uuidv4');
const matchSorter = require('match-sorter')
const librarySongsList = require('./librarySongsList.json')
let bodyParser = require('body-parser');
const fs = require('fs');
const sanitizeText = require("sanitize-filename");
let cors = require('cors')
let currentPromotions = require("./public/promotions/currentPromotions.json")
//-----------------------------//
let app = express();
let discordToken = process.env.discordToken
let mongoKey = process.env.mongoDBKey
let emailPassword = process.env.pass
let API_KEY = process.env.apiKey
var awaitingVerification = []
var resetverification = []
const shareKey = process.env.shareKey
const shareIv = process.env.shareIv
let tempSongs = []
//If you want to edit something, just put inLocalhost = true and it will let you use the website without the account system
/* ------------------------------------------------------->*/       var inLocalhost = false


app.enable('trust proxy');
if (!inLocalhost) {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`)
        } else {
            next()
        }
    })
} else {
    mongoKey = ""
    discordToken = ""
    emailPassword = ""
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thoseskymoddersv@gmail.com',
        pass: emailPassword
    }
});
app.use(express.static('public'));
app.use(bodyParser.json());
var port = process.env.PORT || 8080

setInterval(() => {
    removeUnusedVerification()
}, 60000);

setInterval(() => {
    removeTempSongs()
}, 600000);

//----------------------------------------------------------------------------------------------//

function removeUnusedVerification() {
    for (let i = 0; i < awaitingVerification.length; i++) {
        awaitingVerification[i].timesChecked++
        if (awaitingVerification[i].timesChecked > 5) {
            awaitingVerification.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < resetverification.length; i++) {
        resetverification[i].timesChecked++
        if (resetverification[i].timesChecked > 5) {
            resetverification.splice(i, 1)
            i--
        }
    }
}

function removeTempSongs() {
    let date = new Date().getTime()
    for (let i = 0; i < tempSongs.length; i++) {
        if (tempSongs[i].expiration < date) {
            tempSongs.splice(i, 1);
            i--
        }
    }
}
//----------------------------------------------------------------------------------------------//

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
var server = app.listen(port, () => {
    console.log("server is running on port", server.address().port);
});
//----------------------------------------------------------------------------------------------//


app.post('/api/generateTempSong', cors(), function (req, res) {
    try {
        var value = req.body;
        if (API_KEY === value.API_KEY) {
            let song = {
                song: value.song,
                expiration: new Date().getTime() + 3600000,
                id: makeseed(8)
            }
            tempSongs.push(song)
            let url = "https://sky-music.herokuapp.com/?tempSong=" + song.id
            res.send(url)
        } else {
            res.status(403).send("Invalid API key")
        }
    } catch {
        res.status(500).send("Error")
    }
});

app.post("/getPromotions", async function (req, res) {
    res.send(JSON.stringify(currentPromotions))
})
app.get("/api/songs", cors(), async function (req, res) {
    let search = req.query.search
    let get = req.query.get
    if (search) {
        if (typeof search !== 'string') return res.status(404).json({ error: "Error, no search string" })
        let matches = matchSorter.matchSorter(librarySongsList,
            search,
            {
                keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'name' }]

            })
        res.json(matches)
    } else if (get) {
        if (librarySongsList.some(song => song.file === get)) {
            let text = await fs.promises.readFile(`./public/librarySongs/${get}`)
            res.json(JSON.parse(text))
        } else {
            res.status(404).json({
                error: "file not found"
            })
        }
    }

})
//----------------------------------------------------------------------------------------------//

app.post('/getTempSong', function (req, res) {
    try {
        var value = req.body;
        for (let i = 0; i < tempSongs.length; i++) {
            if (tempSongs[i].id == value.id) {
                res.send(tempSongs[i].song)
                return
            }
        }
        res.send("false")
    } catch {
        res.send("false")
    }
});


var botIsOnline = false
if (!inLocalhost) {
    MongoClient.connect(mongoKey, function (err, db1) {
        try {
            bot.login(discordToken);
            bot.on("ready", () => {
                bot.user.setActivity("errors", {
                    type: "LISTENING"
                })
                console.log("The bot is online!");
                botIsOnline = true
            });
        } catch {
            console.log("Error with the bot")
        }

        function reportError(msg) {
            if (!botIsOnline) return;
            try {
                var errorChannel = bot.channels.cache.get("708298853316558999")
                let embed = new Discord.MessageEmbed()
                embed.setTitle("WARNING")
                    .setDescription(msg)
                    .setColor(15158332)
                errorChannel.send({
                    embed
                })
            } catch {
                console.log("Error with the bot!")
            }
        }
        if (err) throw err;
        const db = db1.db("skyMusic2");
        //----------------------------------------------------------------------------------------------//
        app.post("/createAccount", async function (req, res) { //updated
            var value = req.body;
            try {
                value.email = value.email.toLowerCase()
                if (value.password.length < 6) { //checks lenght of password
                    res.send("Password must be minimum 5 characters")
                    return;
                }
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)) { //check validity of email
                    res.send("Invalid email")
                    return;
                }
                if (value.email.includes("$")) { //checks validity of email
                    res.send("Invalid email, it must not contain a $")
                    return;
                }
            } catch (e) {
                res.send("Error in credentials!")
                reportError(e)
                return
            }
            try {
                for (let i = 0; i < awaitingVerification.length; i++) { //if there is already a request pending from this mail
                    if (awaitingVerification[i].email == value.email) {
                        res.send("You have a pending verification, try again in 5 minutes") //request already existing
                        return
                    }
                }
            } catch (e) {
                res.send("Error while creating the account")
                reportError(e)
                return
            }
            if (!await checkUser(value.email, db)) {
                sendVerificationCode(value, res) //sent verification, now it waits for next call from the user to verify the account
            } else {
                res.send("Email already registered!")
            }
        })
        //----------------------------------------------------------------------------------------------//
        app.post("/verifyAccount", async function (req, res) { //updated
            var value = req.body;
            let canProceed = false;
            var credentials;
            try {
                for (let i = 0; i < awaitingVerification.length; i++) {
                    if (awaitingVerification[i].email == value.email) { //if there is a pending verification from this email
                        if (awaitingVerification[i].code == value.code) { //if the code is correct
                            credentials = awaitingVerification[i]
                            awaitingVerification.splice(i, 1)
                            canProceed = true;
                            break;
                        }
                    }
                }
            } catch (e) {
                res.send("Error!")
                reportError(e)
                return;
            }
            if (canProceed) {
                try {
                    let users = db.collection("Users")
                    var passwordseed = makeseed(20)
                    var finalhash = hash(hashwithseed(credentials.password, passwordseed))
                    if (finalhash != null) {
                        await users.insertOne({
                            email: credentials.email,
                            password: finalhash,
                            seed: passwordseed,
                            songs: []
                        })
                    }
                } catch {
                    res.send("Error!")
                }
                res.send(true)
            } else {
                res.send("The code is not correct, try again!")
            }
        })
        //----------------------------------------------------------------------------------------------//
        app.post("/login", async function (req, res) { //updated
            var value = req.body;
            //checks email length
            try {
                if (value.email.length > 64 || value.password.length > 128 || value.password.length < 5) {
                    res.send("Invalid credentials")
                    return;
                }
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)) {
                    res.send("Invalid email")
                    return;
                }
            } catch (e) {
                res.send("Error!")
                reportError(e)
                return;
            }
            if (await checkUser(value.email, db)) {
                let users = db.collection("Users")
                let credentials = await users.findOne({ email: value.email })
                try {
                    if (checkPassword(value.password, credentials.password, credentials.seed)) {
                        res.send(true)
                    } else {
                        res.send("Credentials wrong!")
                    }
                } catch (e) {
                    res.send("Credentials wrong!")
                    console.log(e)
                }
            } else {
                res.send("Credentials wrong!")
            }
        })
        app.post("/resetPassword", async function (req, res) {//updated
            var value = req.body;
            try {
                value.email = value.email.toLowerCase()
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)) { //check validity of email
                    res.send("Invalid email")
                    canProceed = false;
                    return;
                }
                if (value.email.includes("$")) { //checks validity of email
                    res.send("Invalid email, it must not contain a $")
                    return;
                }
            } catch (e) {
                res.send("Error in email!")
                reportError(e)
                return
            }
            try {
                for (let i = 0; i < resetverification.length; i++) { //if there is already a request pending from this mail
                    if (resetverification[i].email == value.email) {
                        res.send("You have a pending reset verification, try again in 5 minutes") //request already existing
                        return;
                    }
                }
            } catch (e) {
                res.send("Error while checking the account")
                return
            }
            if (await checkUser(value.email, db)) {
                sendresetlink(value, res) //sent verification, now it waits for next call from the user to reset password
            } else {
                res.send("No email registered!")
            }
        })

        app.post("/generateShareLink", async function (req, res) { //error handled
            var value = req.body;
            try {
                var link = "https://sky-music.herokuapp.com?songUrl=" + encrypt(JSON.stringify(value))
            } catch (e) {
                res.send(false)
                return
            }
            res.send(link)
        })

        app.post("/getByLink", async function (req, res) {//updated
            try {
                var value = JSON.parse(decrypt(req.body.url))
                if (value.songName == undefined) {
                    res.send(false)
                    return
                }
            } catch (e) {
                console.log(e)
                res.send(false)
                return
            }
            try {
                var users = db.collection("Users")
            } catch (e) {
                console.log(e)
                res.send(false)
                return
            }
            try {
                var savedSongs = await users.findOne({ email: value.email })
                var song = savedSongs.songs.filter(song => song.name == value.songName)
                if (song.length == 0) {
                    res.send(false)
                    return
                }
            } catch (e) {
                console.log(e)
                res.send(false)
                return
            }
            res.send(song)
        })
        //----------------------------------------------------------------------------------------------//
        app.post("/getSongs", async function (req, res) { //updated
            var value = req.body;
            try {
                var users = db.collection("Users")
                var credentials = await users.findOne({ email: value.email })
            } catch (e) {
                res.send("Error with the server!")
                console.log(e)
                return
            }
            if (credentials == undefined) {
                res.send("Credentials wrong")
                return;
            }
            try {
                if (checkPassword(value.password, credentials.password, credentials.seed)) {
                    var allSongs = await users.findOne({ email: value.email })
                    res.send(allSongs.songs)
                } else {
                    res.send("Credentials are wrong!")
                }
            } catch (e) {
                res.send("Error!")
                reportError(e)
            }
        })
        //----------------------------------------------------------------------------------------------//
        app.post("/saveSongs", async function (req, res) { //updated
            var value = req.body;
            if (JSON.stringify(value).length > 150000) { //if it's longer than 150000 characters, to prevent too big files from being uploaded
                res.send("Song is too large, it can't be uploaded")
                return;
            }
            try {
                var users = db.collection("Users")
                var credentials = await users.findOne({ email: value.email })
            } catch (e) {
                res.send("Error with the account!")
                return;
            }
            if (credentials == undefined) {
                res.send("Credentials wrong")
                return;
            }
            var alreadySavedSongs = ""
            try {
                if (checkPassword(value.password, credentials.password, credentials.seed)) {
                    for (var i = 0; i < value.song.length; i++) {
                        var savedSongs = await users.findOne({ email: value.email })
                        let isSaved = savedSongs.songs.filter(song => song.name == value.song[0].name)
                        if (isSaved.length == 0) {
                            await users.update(
                                { email: value.email },
                                { $push: { songs: value.song[i] } }
                            )
                        } else {
                            alreadySavedSongs += "<br>" + value.song[i].name + " was already saved"
                        }
                    }
                    res.send("Added songs" + alreadySavedSongs)
                } else {
                    res.send("Credentials are wrong!")
                }
            } catch (e) {
                reportError(e)
                res.send("Error!")
            }
        })
        //----------------------------------------------------------------------------------------------//
        app.post("/deleteSong", async function (req, res) { //updated
            var value = req.body;
            try {
                var users = db.collection("Users")
                var credentials = await users.findOne({ email: value.email })
            } catch (e) {
                reportError(e)
                res.send("Error with the server!")
                return
            }
            if (credentials == undefined) {
                res.send("Credentials wrong")
                return;
            }
            try {
                if (checkPassword(value.password, credentials.password, credentials.seed)) {
                    users.update(
                        { email: value.email },
                        { $pull: { 'songs': { name: value.songName } } }
                    )
                } else {
                    res.send("Credentials are wrong!")
                    return;
                }
            } catch {
                res.send("Error!")
                return;
            }
            res.send("Song :" + value.songName + " deleted!")
        })
        app.post("/verifyResetCode", async function (req, res) { //updated
            var value = req.body;
            let canProceed = false;
            if (value.password.length < 6) {
                res.send("Password needs to be at least 6 characters long!")
                return;
            }
            if (value.password != value.passwordConfirm) {
                res.send("Passwords don't match!")
                return;
            }
            try {
                for (let i = 0; i < resetverification.length; i++) {
                    if (resetverification[i].email == value.email) {
                        if (resetverification[i].code == value.code) {
                            canProceed = true;
                        }
                    }
                }
            } catch (e) {
                res.send("Error!")
                reportError(e)
                return;
            }
            if (canProceed) {
                try {
                    let users = db.collection("Users")
                    let passwordseed = makeseed(20)
                    let finalhash = hash(hashwithseed(value.password, passwordseed))
                    if (finalhash != null) {
                        await users.updateOne({
                            email: value.email
                        }, {
                            $set: {
                                password: finalhash,
                                seed: passwordseed
                            }
                        }).catch()
                        res.send(true)
                    }
                } catch (e) {
                    console.log(e)
                    res.send("Error!")
                }
            } else {
                res.send("The code is not correct, try again!")
            }
        })

        app.post("/sendSongToDiscord", async function (req, res) {
            if (!botIsOnline) {
                res.send("Service unavailabe")
                return
            }
            try {
                let song = req.body.song
                let songsChannel = bot.channels.cache.get("730884082258673715")
                let fileName = sanitizeText(song.name.split(" ").join("_"))
                let songLength, numOfNotes
                try {
                    numOfNotes = song.songNotes.length
                    songLength = song.songNotes[numOfNotes - 1].time || 0
                } catch (error) {

                }
                let embedText = `
                    **Length**: ${formatMillis(songLength)}
                    **Notes**: ${numOfNotes}
                    **Pitch**: ${song.pitchLevel}
                    **Density**: ${Number((song.songNotes.length / (song.songNotes[song.songNotes.length - 1].time / 1000)).toFixed(2))}
                    **Multilayer**: ${song.songNotes.filter(e => e.l > 1).length}
                    ${song.isComposed ? "Composed" : "Recorded"}
                `



                fs.writeFile(__dirname + "/public/temp/" + fileName + ".txt", JSON.stringify([song], null, "\t"), async function (e) {
                    if (e) { reportError(e); res.send("Error!"); return }
                    try {
                        let embed = new Discord.MessageEmbed()
                        let file = new Discord.MessageAttachment(__dirname + "/public/temp/" + fileName + ".txt");
                        embed.setTitle(song.name)
                            .setDescription(embedText)
                            .setColor(3447003)
                        await songsChannel.send({ embed: embed, files: [file] });
                        fs.unlinkSync(__dirname + "/public/temp/" + fileName + ".txt")
                    } catch (e) {
                        reportError(e)
                        res.send("Error!")
                        return
                    }
                });
                res.send("Song sent!")
            } catch (e) {
                reportError(e)
                res.send("Error!")
            }

        })

    });
    app.post("/reportSavedLogs", async function (req, res) {
        if (!botIsOnline) {
            res.send("oops")
            return
        }
        let logs = req.body
        try {
            let embed = new Discord.MessageEmbed()
            embed.setTitle("CLIENT ERROR")
                .setDescription(logs.header.join("\n"))
                .setColor(15158332)
                .addField('Errors', logs.errors.join("\n"), false)
                .addField('\u200b', '\u200b')
                .addField('Warns', logs.warns.join("\n"), false)
                .addField('\u200b', '\u200b')
                .addField('Logs', logs.logs.join("\n"), false)
            bot.channels.cache.get("732631538415566890").send({ embed });
        } catch { }
        res.send("Log sent")
    })
    app.get('*', function (req, res) {
        res.status(404).sendFile(__dirname + "/public/errorLoading.html")
    });
}
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
function sendVerificationCode(credentials, res) { //error handled
    let verificationCode = ""
    for (var i = 0; i < 6; i++) {
        verificationCode += Math.floor(Math.random() * 9)
    }
    try {
        let verificationObj = {
            email: credentials.email,
            password: credentials.password,
            code: verificationCode,
            timesChecked: 0
        }
        var mailOptions = {
            from: 'thoseskymoddersv@gmail.com',
            to: credentials.email,
            subject: 'Verification',
            html: '<center><h1>Your code is: <font style="color: rgba(22, 22, 22, 0.65);">' +
                verificationCode +
                '</font></h1></center>'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send("Error!")
                console.log(error)
            } else {
                awaitingVerification.push(verificationObj)
                res.send(true)
            }
        });
    } catch (e) {
        console.log(error)
        res.send("Error!")
        return;
    }
}

function hashwithseed(string, randomseed) {
    var increment = 3;
    var input = randomseed + string;
    var output = "";
    try {
        while (increment < input.length) {
            if (increment % 2 == 0) {
                var output = output + input.charAt(increment);
            } else {
                var output = input.charAt(increment) + output;
            }
            increment++;
        }
        return output;
    } catch (e) {
        console.log(e)
        return false
    }
}

function checkPassword(password, DBpassword, DBseed) {
    try {
        var inputwithseed = hash(hashwithseed(password, DBseed))
        if (DBpassword == inputwithseed) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e)
        return false
    }
}
//----------------------------------------------------------------------------------------------//
function sendresetlink(credentials, res) { //error handled
    let resetToken = ""
    try {
        resetToken = uuid()
        let verificationObj = {
            email: credentials.email,
            code: resetToken,
            timesChecked: 0
        }
        var mailOptions = {
            from: 'thoseskymoddersv@gmail.com',
            to: credentials.email,
            subject: 'Password Reset',
            html: '<center><h1>Your password reset code is : <font style="color: rgba(22, 22, 22, 0.65);">' +
                resetToken +
                '</font></h1></center>'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send("Error!")
                console.log(error)
            } else {
                resetverification.push(verificationObj)
                res.send(true)
            }
        });
    } catch (e) {
        res.send("Error!")
        return;
    }
}
//--------------------------------------------------------------------------------------------------------//
function makeseed(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
//--------------------------------------------------------------------------------------------------------//
function decrypt(text, isSong = false) {
    let decipher
    if (isSong) {
        decipher = crypto.createDecipheriv("aes128", songKey, songIv)
    } else {
        decipher = crypto.createDecipheriv("aes192", shareKey, shareIv)
    }
    return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8')
}
//--------------------------------------------------------------------------------------------------------//
function encrypt(text, isSong = false) {
    let cipher
    if (isSong) {
        cipher = crypto.createCipheriv("aes128", songKey, songIv)
    } else {
        cipher = crypto.createCipheriv("aes192", shareKey, shareIv)
    }
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex')
}

if (!fs.existsSync(__dirname + "/public/temp")) {
    fs.mkdirSync(__dirname + "/public/temp");
}


const checkUser = (mail, db) => db.collection("Users").findOne({ email: mail }).then(user => {
    return Boolean(user)
})

function formatMillis(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


















function encryptSong(text) {
    let encryptedText = []
    let keyLength = songKey.length
    let keyCounter = 0
    text = songIv + text
    for (let i = 0; i < text.length; i++) {
        encryptedText.push(text.charCodeAt(i) + songKey.charCodeAt(keyCounter) - 100)
        keyCounter++
        if (keyCounter >= keyLength) keyCounter = 0
    }
    return encryptedText
}
function decryptSong(array) {
    let decryptedText = ""
    let keyLength = songKey.length
    let keyCounter = 0
    for (let i = 0; i < array.length; i++) {
        decryptedText += String.fromCharCode(array[i] - songKey.charCodeAt(keyCounter) + 100)
        keyCounter++
        if (keyCounter >= keyLength) keyCounter = 0
    }
    decryptedText = decryptedText.replace(songIv, "")
    console.log(decryptedText)
    return decryptedText
}




