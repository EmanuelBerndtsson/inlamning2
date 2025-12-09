function swap(message) {
    // Ta bort extra mellanslag i början/slutet
    message = message.trim();

    // Dela upp meddelandet i ord (allt separerat av ett eller flera mellanslag)
    var words = message.split(/\s+/);
    // Om det är för kort text, gör inget
    if (words.length < 2) {
        return message;
    }

    var mid = Math.floor(words.length / 2);

    var firstPart = words.slice(0, mid).join("");
    var secondPart = words.slice(mid).join("");


    var swapped = secondPart + "" + firstPart;

    console.log(swapped)

    return swapped;

}

swap("Hej hur mår du?")
