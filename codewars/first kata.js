var isSquare = function(n){
  if ((Math.sqrt(n) % 1) != 0)  {
    return false; // fix me
  } else {
  	return true
  }
}

console.log(isSquare(25));

//BP 

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}