const fs = require('fs');
function getNewLibrarySongs(){
    return new Promise((resolve,reject) => {
        let html = ""
        let songObj = []
        fs.readdir(__dirname + "/public/librarySongs/temp", (err, files) => {
            files.forEach((fileName,i) => {
                console.log(i,fileName)
                let fileText = ""
                try{
                    fileText = JSON.parse(fs.readFileSync(__dirname + "/public/librarySongs/temp/" + fileName, 'utf8').toString())
                }catch(e){
                    console.log("Error at...",i,fileName) 
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
            console.log("Done fetching: "+songObj.length+" files")
            console.log(" ")
            songObj.forEach(song => {
                let fileName = song.name.replace(".txt", "")
                let songName = song.fileText[0].name
                let htmlText = `<li class="content"> <img class="dS" onclick="dwJS('${fileName}')"><skyButton onclick="playSong(this)">${songName}</skyButton></li>\n`
                html += htmlText
            })
            console.log(html)
            resolve(html)
        });
    })

}
getNewLibrarySongs()