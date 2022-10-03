const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// breakIntoWords will take a string and return an array with an element for each word in the oiginal string
function breakIntoWords(inputString) {
  const wordArray = [];
  let nextWord = '';
  for (let i in inputString) {
    nextWord = nextWord.concat(inputString[i]);
    if (inputString[i] === ' ' || Number(i) === inputString.length - 1) {
      wordArray.push(nextWord);
      nextWord = '';
    }
  }
  return wordArray;
}

// takes elements and concatonates them all into one string
function putBackTogether(inputArray) {
  let line = '';
  for (let i in inputArray) {
    line = line.concat(inputArray[i]);
  }
  return line;
}

// takes a string and capitalizes the first letter
function capFirstLetter (word) {
  return word[0].toUpperCase() + word.slice(1);
}

// takes an array and capitalizes the first letter in each element
function capFirstLetterInArray (arrayOfWords) {
  return arrayOfWords.map(capFirstLetter);
}

// takes a 2D array and capitalizes each element in the inner array
function capFirstLetter2AArray (arrayOfArraysOfWord) {
  return arrayOfArraysOfWord.map(capFirstLetterInArray);
}

// const resultsPutTogether = capFirstLetter2AArray(tutorials.map(breakIntoWords)).map(putBackTogether);

function titleCased () {
  return capFirstLetter2AArray(tutorials.map(breakIntoWords)).map(putBackTogether);
}

console.log(titleCased());