function score(dice) {
  const counter = [0,0,0,0,0,0]
  const points = [1000,200,300,400,500,600]
  const specialPoints = [100,0,0,0,50,0]
  dice.forEach(number => { counter[number - 1]++ })
  console.log(counter)
  return counter.reduce((score, number, index) => {
    return score + (number >= 3 ? points[index] : 0) + specialPoints[index]*(number % 3)
  }, 0)
}
console.log(score([2,3,4,6,2]) === 0)
console.log(score([1,1,1,6,2]) === 1000)
console.log(score([5,1,3,4,1]) === 250)
console.log(score([4,4,4,3,3]) === 400)
console.log(score([2,4,4,5,4]) === 450)

