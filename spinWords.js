/*
Write a function that takes in a string of one or more words, and returns the 
same string, but with all five or more letter words reversed (Just like the name 
of this Kata). Strings passed in will consist of only letters and spaces. Spaces 
will be included only when more than one word is present.
*/

function spinWords(string) {
	var answer = []
  string.split(" ").map(reverseIfFive)
  function reverseIfFive(value, index, array) {
 		if (value.length >= 5) {
 			value = value.split("").reverse().join("");
 		} 
		answer.push(value)
  }
  return answer.join(" ")
}

console.log(spinWords("take a five words string"))

//BP

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}