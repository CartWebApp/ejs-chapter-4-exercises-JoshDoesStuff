function range(start, end, step = 1) {
  const rangeArr = []
  let count = start
  if (end > start) {
    rangeArr.push(start)
    while (count < end) {
      rangeArr.push(`${count + step}`);
      count++
      
    } 
  } else if (end < start) {
    rangeArr.push(start)
    for (i = start; i > end; i = i + step) {
      rangeArr.push(`${i + step}`);
    }
  }
  return rangeArr
}

function sum(numbers) {
  // Add code.
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
