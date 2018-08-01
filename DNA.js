function DNAStrand(dna){
	return dna.split('').map(function (dna) {
		switch(dna) {
			case "A":
					return dna = "T";
					break;
			case "T":
					return dna = "A";
					break;
			case "C":
					return dna = "G";
					break;
			case "G":
					return dna = "C";
					break;
		}
	}).join('')
}

console.log(DNAStrand("AAAA"));

// BP

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}