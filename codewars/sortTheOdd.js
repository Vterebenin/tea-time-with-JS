function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  // пушим в эррей "odds" четные
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  //сортируем по восходящему
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  //we can use it, because odds will not be equal to even every time
  //шифтим из стэка элементы, заменяя их на отсортированные значения
  // мы можем это использовать, потому что четные не будут равны нечетным
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
}
sortArray([5, 3, 2, 8, 1, 4])