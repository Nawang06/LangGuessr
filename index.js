const franc = require("franc")
const langs = require("langs")
const colors = require("colors")

// console.log(langs.where("3", "nep").name)

const input = process.argv[2]
// console.log(input)

const langCode = franc(input)
// console.log(langCode)
if (langCode == "und") {
    console.log("Heyo! Sorry Couldn't Figure out the Language. Could you try to input a longer form of it??")
}
else {
    try {
        const language = langs.where("3", langCode)
        // console.log(language)
        console.log(`Our Best guess is that the language you've input is: ${language.name}`.underline)
    }
    catch (e) {
        console.log("Sorry there is no such language in our database currently!!")
    }
}