function count(string) {
	if (string) {
		string = string.split('');
		var countUTF = {};
		for (var i = string.length - 1; i >= 0; i--) {
		 	if (countUTF[string[i]]) {
		 		countUTF[string[i]] += 1
		 	} else {
		 		countUTF[string[i]] = 1
		 	};
		 };
		 return countUTF;
	}
	return {};
};

console.log(count('abca'));

// BP 

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

