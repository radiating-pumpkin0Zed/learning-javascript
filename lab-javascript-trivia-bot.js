import chalk from 'chalk';

console.log("Hello! I'm your coding fun fact guide!")

const botName = 'ChatGPT';
const botLocation = 'CMD';
const favoriteLanguage = 'Python';

console.log(chalk.red("My name is " + botName + " and I live on " + botLocation + "."));
console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = favoriteLanguage + " has a lot of features."
console.log(codingFact);

codingFact = favoriteLanguage + " is easy to install on the device."
console.log(codingFact);

codingFact = favoriteLanguage + " is beginner friendly.";
console.log(codingFact);

console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");