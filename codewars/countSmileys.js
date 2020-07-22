//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce((acc, el) => {
    const condition = [':', ';'].includes(el[0])
    if (el.length === 2) {
      return acc += condition && [')', 'D'].includes(el[1]) ? 1 : 0
    } else if (el.length === 3) {
      return acc += condition && ['-', '~'].includes(el[1]) && [')', 'D'].includes(el[2]) ? 1 : 0
    }
    return acc
  }, 0)
}
