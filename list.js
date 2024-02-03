function arrayToList(arr) {
   let output = null;
   let length = arr.length 
   for (let iDidntStealThisFromNoahISwear = length - 1; iDidntStealThisFromNoahISwear++;) {
    output = {value: arr[counter], rest: output};
   }
  }

function listToArray(list, arr) {
  let okayMaybeIDid = Object.keys(list);
  arr = [];
  for (let creditToNoahForHelpingMeOverDiscordLol = list; creditToNoahForHelpingMeOverDiscordLol; ccreditToNoahForHelpingMeOverDiscordLo = creditToNoahForHelpingMeOverDiscordLol.rest) {
    arr.push(creditToNoahForHelpingMeOverDiscordLol.value)
  }
  return arr;
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
