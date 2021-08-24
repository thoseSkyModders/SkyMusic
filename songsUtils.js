const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
const https = require("https")
var usedSongs = require('./usedSongs.json')
let discordToken = ""

const getDiscordSongs = false
const deleteOldTemp = false
const generateHTMLOnly = false
const removeUnusedSongs = false
const doGenerateSongsData = false


bot.on("ready",async () => {
    bot.user.setActivity("errors", {
        type: "LISTENING"
    })
    console.log("The bot is online!");
    if(deleteOldTemp){
        await fs.promises.rm("./public/librarySongs/temp/",{recursive:true})
        fs.mkdirSync("./public/librarySongs/temp/")
        console.log("Deleted old sheets...")

    }
    if(!generateHTMLOnly){
        let songsChannel = bot.channels.cache.get("730884082258673715")
        console.log("-------------Getting messages-------------\n\n")
        let messages = await messageGetter("730884082258673715")
        console.log("-------------Getting attachments-------------\n\n")
        let attachments = getAttachments(messages)
        console.log("Total attachments: ",attachments.length)
        console.log("-------------Downloading sheets-------------\n\n")
        await downloadAttachments(attachments)   
        console.log("-------------Generating HTML-------------\n\n")
        let html = await generateHtml()
        fs.writeFile('songsHtml.txt', html, function (err) {
            if (err) return console.log(err);
            console.log("saved html")
          }); 
    }else{
        let html = await generateHtml()
        fs.writeFile('songsHtml.txt', html, function (err) {
            if (err) return console.log(err);
            console.log("saved html")
          });
    }

});


function getAttachments(messages){
    let attachments = []
    messages.forEach(message => {
        message.attachments.forEach(attachment => attachments.push(attachment))
    })
    return attachments
}

async function downloadAttachments(attachments){
    let attachmentResults = []
    let i = 0
    let length = attachments.length
    while(attachments.length > 0){
        let promiseArray = []
        for(let j = 0; j< 10 && attachments.length > 0;j++){
            let el = attachments.pop()
            promiseArray.push(el)
            i++
            console.log(`[${i} / ${length}] ` + el.name.replace(".txt",""))
        }
        await Promise.all(promiseArray.map(e => downloadViaUrl(
            e.url,
            "./public/librarySongs/temp/"+e.name)))
        attachmentResults.push(...promiseArray)

    }
    for(let i = 0; i<attachments.length; i++){

    }
    return attachmentResults
}
async function downloadViaUrl(url,path){
    return new Promise(resolve => {
        const request = https.get(url, function(response) {
            if (response.statusCode === 200) {
                var file = fs.createWriteStream(path)
                response.pipe(file)
                resolve(true)
            }
            request.setTimeout(10000, function() {
                request.abort();
                resolve(false)
            });
        });
    })
}




async function messageGetter(channel, limit = 1000) {
    let songChannel = bot.channels.cache.get(channel)
    const sum_messages = [];
    let last_id;

    while (true) {
        const options = { limit: 100 };
        if (last_id) {
            options.before = last_id;
        }

        let messages = await songChannel.messages.fetch(options);
        let endingIndex = -1
        messages.array().forEach((message,i)=>{
            if(message.author.id != "708297340447883294"){
                endingIndex = i
                console.log(message.author.id + " ENDING")
            }
        })
        if(endingIndex !== -1){
            let messagesArr = messages.array()
            messagesArr.splice(endingIndex,messagesArr.length)
            sum_messages.push(...messagesArr)
            break
        }
        sum_messages.push(...messages.array());
        last_id = messages.last().id;
        console.log("Fetched messages: ", sum_messages.length)
        if (messages.size != 100 || sum_messages.length >= limit) {
            break;
        }
    }

    return sum_messages;
}


function generateHtml(){
    return new Promise((resolve,reject) => {
        let html = ""
        let songObj = []
        fs.readdir(__dirname + "/public/librarySongs/temp", (err, files) => {
            if(err) return console.error("No directory found")
            files.forEach((fileName,i) => {
                console.log(i,fileName)
                let fileText = ""
                try{
                    fileText = fs.readFileSync(__dirname + "/public/librarySongs/temp/" + fileName,"utf8").toString("utf8")
                    fileText = JSON.parse(fileText)
                }catch(e){
                    console.log("Error at...",i,fileName) 
                    console.log(e)
                    return
                    //let buffer = fs.readFileSync(__dirname + "/public/librarySongs/temp/" + fileName,"ucs2").toString()
                    //fileText = JSON.parse(buffer)
                }
                songObj.push({
                    fileText: fileText,
                    i: i,
                    name: fileName
                })
            })
            console.log("Done fetching: "+songObj.length+" files ")
            songObj.forEach(song => {
                let fileName = song.name.replace(".txt", "")
                let songName = song.fileText[0].name
                let htmlText = `<li class="content"> <img class="dS" onclick="dwJS('${fileName}')"><skyButton onclick="playSong(this)">${songName}</skyButton></li>\n`
                html += htmlText
            })
            resolve(html)
        });
    })

}

async function copyUsedSongs(){
    let root = './public/librarySongs/'
    let finalDest = './public/librarySongs/final/'
    let files = await fs.promises.readdir(root)
    let toKeep = files.filter(file => usedSongs.includes(file))

    if(fs.existsSync(finalDest)) await fs.promises.rmdir(finalDest,{recursive:true})

    await fs.promises.mkdir(finalDest)
    for(let i = 0;i<toKeep.length;i++){
        await fs.promises.copyFile(root+toKeep[i],finalDest +toKeep[i])
    }
    console.log("done")
    const duplicates = usedSongs.filter((item, index) => usedSongs.indexOf(item) !== index)
    console.log(duplicates)
}


async function generateSongsData(){
    let root = './public/librarySongs/'
    let finalDest = './librarySongsList.json'
    let files = await fs.promises.readdir(root)
    let result = []
    for(let i = 0;i<files.length;i++){
        let song = await fs.promises.readFile(root+files[i])
        try{
            song = JSON.parse(song)
            result.push({
                name:Array.isArray(song) ? song[0].name: song.name,
                file: files[i]
            })
        }catch(e){
            console.log(files[i])  
        }

    }
    fs.writeFileSync(finalDest, JSON.stringify(result));
    console.log("done")
}

if(doGenerateSongsData) generateSongsData()
if(removeUnusedSongs) copyUsedSongs()
if(getDiscordSongs) bot.login(discordToken)