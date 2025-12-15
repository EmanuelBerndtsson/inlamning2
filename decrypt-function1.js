var encryptionmessage = 'SARQJEDBMKMBJZQHNTRNA';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// var tredje bokstav i meddelnadet är salt. 


export function removesalt(encryptionmessage) {
    var message = encryptionmessage
    // skapar en array
    var messagearray = message.split("")


    var result = [];
    for (let i = 0; i < messagearray.length; i++) {

        if ((i + 1) % 3 !== 0) {

            result.push(messagearray[i])

        }

    }
    return result;
}
