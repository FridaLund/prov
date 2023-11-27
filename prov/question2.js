// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

var words = ["Programming", "is", "great!"];
var letter = "a";

function filterWordsWithLetterA(words, letter) {
  //Din kod här
  letter = letter.split("");

  return words.filter(function (word) {
    return letter.every(function (char) {
      return word.includes(char);
    });
  });
}

const output = filterWordsWithLetterA(words, letter);
console.log(output);
// console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
