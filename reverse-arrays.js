function reverseArray(arr) {
  let array = arr
  let pop1 = array.pop();
  let pop2 = array.pop();
  array.unshift(pop1, pop2)
  return array;
}

function reverseArrayInPlace(arr) {
  let num1;
  let num2;

  let arrayLength = arr.length;
  let idk = arrayLength / 2;

  for (let count = 1; count <= Math.floor(idk); count++) {
    num1 = arr[count - 1];
    num2 = arr[arrayLength - count];
    arr[count - 1] = num2;
    arr[arrayLength - count] = num1;
  }
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]