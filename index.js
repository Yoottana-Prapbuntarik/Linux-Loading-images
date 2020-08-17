let alphabetI = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphabetII = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var request = require("request");
const fs = require('fs');
async function callingAPI(alphabetSet) {
    let options = {
        method: 'GET',
        url: 'https://km8652f2eg-dsn.algolia.net/1/indexes/Services_production/',
        qs: { query: `${alphabetSet}` },
        headers:
        {
            'postman-token': '159928dd-1055-f0d4-be85-1badef0b9164',
            'cache-control': 'no-cache',
            'x-algolia-api-key': 'YzFhZWIwOGRhOWMyMjdhZTI5Yzc2OWM4OWFkNzc3ZTVjZGFkNDdmMThkZThiNDEzN2Y1NmI3MTQxYjM4MDI3MmZpbHRlcnM9cHJpdmF0ZSUzRDA',
            'x-algolia-application-id': 'KM8652F2EG'
        }
    };

    await request(options, function (error, response, body) {
        if (error) throw new Error(error);
        JSON.parse(body).hits.forEach(element => console.log(JSON.stringify(element)+(',')));
    });
}



for (let indexAlphabetI = 0; indexAlphabetI < alphabetI.length; indexAlphabetI++) {
    for (let indexAlphabetII = 0; indexAlphabetII < alphabetII.length; indexAlphabetII++) {
        callingAPI(alphabetI[indexAlphabetI] + alphabetII[indexAlphabetII])
    }
}
