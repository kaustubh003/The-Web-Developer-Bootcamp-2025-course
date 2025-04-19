const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const languageCode = franc(input);
const colors = require("colors");

if (languageCode === "und") {
  console.log("NOT FOUND");
} else {
  const language = langs.where("3", languageCode);
  console.log(`Our best guess is ${language.name}`.green);
}
