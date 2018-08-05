/* 
	In this kata you are required to, given a string, replace every letter with 
	its	position in the alphabet.
	If anything in the text isn't a letter, ignore it and don't return it.
	a being 1, b being 2, etc.
*/ 

function alphabetPosition(text) {
  text = text.replace(/[^a-z]/gi, '').toUpperCase().replace(/./g, function(c) {
		return alphabetPosition.pairs[c] + " "
	})
  return text.slice(0, -1)
}

alphabetPosition.pairs = {
	A: '1',	B: '2', C: '3',	D: '4', E: '5',
	F: '6',	G: '7',	H: '8',	I: '9',	J: '10',
	K: '11', L: '12', M: '13', N: '14', O: '15',
	P: '16', Q: '17', R: '18', S: '19', T: '20',
	U: '21', V: '22', W: '23', X: '24', Y: '25',
	Z: '26', 
}
Шрифт Roboto
//BP 
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

/* 
	чему я научился здесь? 
	у каждого из символов есть свой порядковый ASCII код, который можно 
	использовать для манипуляций с его алфавитным индексом.
*/