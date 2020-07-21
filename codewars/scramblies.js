function scramble(str1, str2) {
  const occurences = str1.split('').reduce((buffer, cur) => {
    buffer[cur]
      ? buffer[cur]++
      : buffer[cur] = 1
    return buffer
  }, {})
  return str2.split('').every((char) => --occurences[char] >= 0)
}
console.log(scramble('rkqodlw','world') === true);
console.log(scramble('cedewaraaossoqqyt','codewars') === true);
console.log(scramble('katas','steak') === false);
console.log(scramble('scriptjava','javascript') === true);
console.log(scramble('scriptingjava','javascript') === true);
console.log(scramble('scriptsjava','javascripts') === true);
console.log(scramble('jscripts','javascript') === false);
console.log(scramble('scriptsjavx','javascript') === false);
console.log(scramble('aabbcamaomsccdd','commas') === true);
