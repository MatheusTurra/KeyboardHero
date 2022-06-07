import faker from "faker";

export function generateWords(arraySize = 400) {
  let wordsArray = [];

  for(let index = 0; index < arraySize; index++) {
    const word = getRandomWord();
  
    if(word) {
      wordsArray.push(word);
    }
  }
  
  return wordsArray;
}

function getRandomWord() {
  const randomWord = faker.random.word().toLowerCase();
  const detectNumbers = /\d/.test(randomWord);
  
  if(randomWord.length < 7 && detectNumbers === false) return randomWord;
}