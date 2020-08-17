const fs = require('fs');
const path = require('path')

let rawdata = fs.readFileSync('data.json');
let convertText = JSON.parse(rawdata)
convertText.data.forEach((element) => {
    let extname = path.extname(element.image_url)
    console.log(`curl -X GET ${element.image_url} --output ./images/${element.slug}${extname}`)
});