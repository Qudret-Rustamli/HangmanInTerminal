const inquirer = require('inquirer');
const progammingLanguages = ['Javascript', 'Python', 'Java', 'VBA', 'SQL'];
function selectWord() {
  let index = Math.floor(Math.random() * progammingLanguages.length);
  return progammingLanguages[index];
}
var word = selectWord().toLowerCase();
var t = [];
for (let i = 0; i < word.length; i++) {
  t.push('-');
}
var live = 5;
console.log(t);
console.log(
  'Development mərhələsi olduğu üçün bu console.log  işləyir və tapılacaq söz ekranda görsədilir',
  word,
);
async function Game() {
  const result = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'q',
        message: 'Guess a letter!',
      },
    ])
    .then(function (answer) {
      var arr = [];
      if (answer.q.length === 1 && answer.q.length) {
        console.log(arr.includes(answer.q)); //yoxlanilacaq
        if (!arr.includes(answer.q.toLowerCase())) {
          arr.push(answer.q.toLowerCase());
        }
        console.log('arr', arr);
        console.log('Guess a letter!', answer.q);
        if (word.includes(answer.q.toLowerCase())) {
          console.log('Correct!');
          for (let j in word.toLowerCase()) {
            if (answer.q.toLowerCase() === word[j]) {
              t[j] = word[j];
            }
          }
          if (!t.includes('-')) {
            return console.log('You win');
          }
          console.log(t.join(''));
        } else {
          console.log('Incorrect!');
          if (!arr.includes(answer.q)) {
            live--;
          }
          console.log('Qalan cəhd sayı', live);
        }
        if (live === 0) {
          return console.log('You lose!');
        } else {
          return Game();
        }
      } else {
        console.log('Please enter only one letter');
        return Game();
      }
    });
}
Game();
